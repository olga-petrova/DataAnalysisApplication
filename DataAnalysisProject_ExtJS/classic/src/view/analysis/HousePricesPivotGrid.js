Ext.define('DataAnalysis.view.analysis.HousePricesPivotGrid', {
    extend: 'Ext.pivot.Grid',
    xtype: 'house-prices-pivot-grid',

    cls: 'pivotgrid',
    matrixConfig: {
        type:   'remote',
        url:    'http://localhost/dataanalysisapp/house_prices_matrix.php'
    },

    viewLayoutType: 'outline',

    startRowGroupsCollapsed: false,

    highlightedRow: undefined,

    aggregate: [{
        id:         'property_value_agg',
        dataIndex:  'property_value',
        header:     'House price',
        aggregator: 'avg',
        flex: 1,
        minWidth:      90,
        renderer: function (v) {
            v = parseInt(v);
            return Ext.util.Format.number(v, '0,000');
        }
    }],

    leftAxis: [{
        id:         'state',
        dataIndex:  'state',
        header:     'State',
        width:      170
    }],

    topAxis: [{
        id:         'building',
        dataIndex:  'building',
        header:     'Building'
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