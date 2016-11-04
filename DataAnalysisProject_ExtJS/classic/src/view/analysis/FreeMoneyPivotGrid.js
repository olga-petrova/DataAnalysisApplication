Ext.define('DataAnalysis.view.analysis.FreeMoneyPivotGrid', {
    extend: 'Ext.pivot.Grid',
    xtype: 'free-money-pivot-grid',

    cls: 'pivotgrid',
    matrixConfig: {
        type:   'remote',
        url:    'http://localhost/dataanalysisapp/free_money_matrix.php'
    },

    viewLayoutType: 'outline',

    startRowGroupsCollapsed: false,
    colGrandTotalsPosition: 'none',

    aggregate: [{
        id:         'cnt',
        dataIndex:  'cnt',
        header:     'Income',
        aggregator: 'avg',
        flex: 1,
        minWidth:      90,
        renderer: function (v) {
            v = parseInt(v);
            return Ext.util.Format.percent(v/100) ;
        }
    }],

    leftAxis: [{
        id:         'state',
        dataIndex:  'state',
        header:     'State',
        width:      170
    }],

    topAxis: [{
        id:         'segment',
        dataIndex:  'segment',
        header:     'Segment'
    }],

    highlightState: function (state) {
        var record = this.getPivotStore().findRecord('state', state),
            view = this.getView(),
            row = Ext.get(view.getRow(record));

        if (!Ext.isEmpty(this.highlightedRow)) {
            this.highlightedRow.removeCls('highlighted');
        }
        this.highlightedRow = row;
        if (!Ext.isEmpty(this.highlightedRow)) {
            this.highlightedRow.addCls('highlighted');
        }
    }
});

