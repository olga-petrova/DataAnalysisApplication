<?php
/**
* This example explains a bit how to do the calculations on the backend.
* You could also choose to use an OLAP server to do the calculations for you.
* You just need to return the proper JSON file back to the pivot grid.
*
* In this example pivot filtering (label, value and top10) was not implemented.
*
* Import the dataset.sql file in your MySql database and give it a try.
* Don't forget to properly configure the MySql credentials.
*
*/


$dbHostname = 'localhost';
$dbUser = 'root';
$dbPass = '';
$dbDatabase = 'test';
$dbTable = 'people';

class RemoteMatrix{

    private $conn;
    private $req;
    private $result;

    private $dbHostname;
    private $dbUser;
    private $dbPass;
    private $dbDatabase;
    private $dbTable;

    public function __construct($dbHostname, $dbUser, $dbPass, $dbDatabase, $dbTable){
        global $HTTP_RAW_POST_DATA;

        $this->dbHostname = $dbHostname;
        $this->dbUser = $dbUser;
        $this->dbPass = $dbPass;
        $this->dbDatabase = $dbDatabase;
        $this->dbTable = $dbTable;

        $this->conn = mysql_connect($dbHostname, $dbUser, $dbPass);
        $this->req = json_decode($HTTP_RAW_POST_DATA, true);

        mysql_select_db($dbDatabase, $this->conn);
    }

    private function disconnect(){
        mysql_close($this->conn);
    }

    public function getConn(){
        return $this->conn;
    }

    public function getTable(){
        return $this->dbTable;
    }

    public function getGrandTotalKey(){
        return $this->req['grandTotalKey'];
    }

    public function getKeysSeparator(){
        return $this->req['keysSeparator'];
    }

    public function process(){
        $req = $this->req;
        $grandTotalKey = $this->getGrandTotalKey();
        $result = array();

        $leftAxis = new Axis($this, $req['leftAxis']);
        $leftItems = $leftAxis->process();

        $topAxis = new Axis($this, $req['topAxis']);
        $topItems = $topAxis->process();

        $results = new Results($this, $req['aggregate']);

        $results->add(array(
            'key'           => $grandTotalKey,
            'fields'        => array()
        ), array(
            'key'           => $grandTotalKey,
            'fields'        => array()
        ));
        foreach($leftItems as $li){
            $results->add($li, array(
                'key'           => $grandTotalKey,
                'fields'        => array()
            ));
            foreach($topItems as $ti){
                $results->add($li, $ti);
            }
        }

        foreach($topItems as $ti){
            $results->add(array(
                'key'           => $grandTotalKey,
                'fields'        => array()
            ), $ti);
        }
        $resultItems = $results->calculate($req['leftAxis'], $req['topAxis'], $req);

        // do some cleanup
        foreach($leftItems as &$item){
            unset($item['level']);
            unset($item['fields']);
        }
        foreach($topItems as &$item){
            unset($item['level']);
            unset($item['fields']);
        }
        foreach($resultItems as &$item){
            unset($item['leftFields']);
            unset($item['topFields']);
        }

        $result = array(
            'success'   => true,
            'leftAxis'  => $leftItems,
            'topAxis'   => $topItems,
            'results'   => $resultItems
        );

        $this->disconnect();
        $this->toJson($result);
    }

    private function toJson($result){
        echo json_encode($result);
    }

}

class Results {
    private $matrix;
    private $dimensions = array();
    public $items = array();

    public function __construct($matrix, $dimensions){
        $this->matrix = $matrix;
        $this->dimensions = $dimensions;
    }

    public function add($left, $top){
        $this->items[] = array(
            'leftKey'       => $left['key'],
            'topKey'        => $top['key'],
            'leftFields'    => $left['fields'],
            'topFields'     => $top['fields'],
            'values'        => array()
        );
    }

    public function calculate($leftAxis, $topAxis, $req){
          if (isset($req['industry_type']) && isset($req['occupation'])) {
              $sql = "call incomes_pivot('".$req['industry_type']."', '".$req['occupation']."')";
          } else {
            $sql = "call incomes_pivot(NULL, NULL)";
          }

          $result = mysql_query($sql, $this->matrix->getConn());
          $tempResult = array();
          while($row = mysql_fetch_array($result)) {
            array_push($tempResult, $row);
          }
          foreach($this->items as &$item){
            $resultItem = null;
            $isTopTotal = 1;
            $isLeftTotal = 1;
            foreach($tempResult as $tempItem){
                $isCorrectItem = 1;
                foreach($item['leftFields'] as $fKey => $fValue){
                    if ($fValue) {
                        $isLeftTotal = 0;
                    }
                    if($tempItem[$fKey] != $fValue) {
                        $isCorrectItem = 0;
                    }
                }

                foreach($item['topFields'] as $fKey => $fValue){
                  if ($fValue) {
                      $isTopTotal = 0;
                  }
                  if($tempItem[$fKey] != $fValue) {
                      $isCorrectItem = 0;
                  }
                }

                if ($isCorrectItem == 1) {
                  $resultItem = $tempItem;
                  break;
                }

            }
            if ($isTopTotal) {
              $aggragatedItems = 0;
              foreach($tempResult as $tempItem){
                  $isCorrectItem = 1;
                  foreach($item['leftFields'] as $fKey => $fValue){
                      if($tempItem[$fKey] != $fValue) {
                          $isCorrectItem = 0;
                      }
                  }
                  if ($isCorrectItem == 1) {

                    foreach($this->dimensions as $dimension){

                        if (!array_key_exists($dimension['id'], $item['values'])) {
                          $item['values'][$dimension['id']] = 0;
                        }
                        if ($tempItem) {
                            $item['values'][$dimension['id']] += $tempItem[$dimension['id']];
                            $aggragatedItems++;
                        }

                    }
                  }
              }
              foreach($this->dimensions as $dimension){
                  if ($aggragatedItems > 1) {
                      $item['values'][$dimension['id']] = round($item['values'][$dimension['id']]/($aggragatedItems - 1));
                  }
              }
            }
            else {
                if ($isLeftTotal) {
                  $aggragatedItems = 0;
                  foreach($tempResult as $tempItem){
                      $isCorrectItem = 1;
                      foreach($item['topFields'] as $fKey => $fValue){
                          if($tempItem[$fKey] != $fValue) {
                              $isCorrectItem = 0;
                          }
                      }
                      if ($isCorrectItem == 1) {

                        foreach($this->dimensions as $dimension){

                            if (!array_key_exists($dimension['id'], $item['values'])) {
                              $item['values'][$dimension['id']] = 0;
                            }
                            if ($tempItem) {
                                $item['values'][$dimension['id']] += $tempItem[$dimension['id']];
                                $aggragatedItems++;
                            }

                        }
                      }
                  }
                  foreach($this->dimensions as $dimension){
                      if ($aggragatedItems > 0) {
                          $item['values'][$dimension['id']] = round($item['values'][$dimension['id']]/($aggragatedItems - 1));
                      }
                  }
              } else {
                foreach($this->dimensions as $dimension){
                    $item['values'][$dimension['id']] = $resultItem ? $resultItem[$dimension['id']] : 0;
                }
              }
            }


          }

          return $this->items;
    }
}

class Axis{
    private $matrix;
    private $dimensions = array();
    public $items = array();

    public function __construct($matrix, $dimensions){
        $this->matrix = $matrix;
        $this->dimensions = $dimensions;
    }

    public function process(){
        foreach($this->dimensions as $level => $dimension){
            if ($dimension['dataIndex'] == 'segment') {
              $values = array('<= 10,000', '> 10,000', '> 20,000',
              '> 30,000', '> 50,000', '> 100,000',
              '> 150,000', '> 200,000');
            } else {
                $values = $this->getUniqueValues($dimension);
            }


            if($level == 0){
                foreach($values as $v){
                    $fields = array();
                    $fields[$dimension['dataIndex']] = $v;
                    $this->items[] = array(
                        'level'         => 0,
                        'key'           => crc32($v),
                        'value'         => $v,
                        'name'          => $v,
                        'dimensionId'   => $dimension['id'],
                        'fields'        => $fields
                    );
                }
            }else{
                $items = $this->getItemsByLevel($level - 1);

                foreach($items as $item){
                    foreach($values as $v){
                        $fields = $item['fields'];

                        $fields[$dimension['dataIndex']] = $v;
                        $this->items[] = array(
                            'level'         => $level,
                            'key'           => $item['key'] . $this->matrix->getKeysSeparator() . crc32($v),
                            'value'         => $v,
                            'name'          => $v,
                            'dimensionId'   => $dimension['id'],
                            'fields'        => $fields
                        );
                    }
                }
            }
        }

        return $this->items;
    }

    private function getUniqueValues($dimension){
        $sql = "select distinct {$dimension['dataIndex']} from {$this->matrix->getTable()}";
        if($dimension['sortable']){
            $sql .= " order by {$dimension['dataIndex']} {$dimension['direction']}";
        }
        $result = mysql_query($sql, $this->matrix->getConn());
        $rows = array();

        if($result){
            while ($row = mysql_fetch_assoc($result)) {
                $rows[] = $row[$dimension['dataIndex']];
            }
        }

        return $rows;
    }

    private function getItemsByLevel($level){
        $items = array();

        foreach($this->items as $item){
            if($item['level'] == $level){
                $items[] = $item;
            }
        }

        return $items;
    }
}

header('Content-Type: application/json; charset=utf-8');
$m = new RemoteMatrix($dbHostname, $dbUser, $dbPass, $dbDatabase, $dbTable);
$m->process();

?>
