Ext.define('DataAnalysis.view.analysis.IncomesPivotGrid', {
    extend: 'Ext.pivot.Grid',
    xtype: 'incomes-pivot-grid',

    cls: 'pivotgrid',
    matrixConfig: {
        type:   'remote',
        url:    'http://localhost/dataanalysisapp/incomes_matrix.php',
        aggregate: [{
            id:         'cnt',
            dataIndex:  'cnt',
            header:     'Income',
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
        }]
    },

    viewLayoutType: 'outline',

    startRowGroupsCollapsed: false,
    colGrandTotalsPosition: 'none',

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