Ext.define('DataAnalysis.view.analysis.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'analysis-panel',
    requires: [
        'DataAnalysis.view.analysis.HousePricesPivotGrid',
        'DataAnalysis.view.analysis.IncomesPivotGrid',
        'DataAnalysis.view.analysis.FreeMoneyPivotGrid',

        'DataAnalysis.view.analysis.Controller'
    ],

    controller: 'analysis',

    title: 'Analysis',

    layout: 'fit',

    items: [
        {
            xtype: 'tabpanel',
            layout: 'fit',
            items: [
                {
                    title: 'Incomes',
                    layout: 'fit',
                    items: [{
                        xtype: 'incomes-pivot-grid',
                        reference: 'incomesGrid'
                    }]
                },
                {
                    title: 'Housing',
                    layout: 'fit',
                    items: [{
                        xtype: 'house-prices-pivot-grid',
                        reference: 'housesGrid'
                    }]
                },
                {
                    title: 'Purchasing power',
                    layout: 'fit',
                    items: [{
                        xtype: 'free-money-pivot-grid',
                        reference: 'freeMoneyGrid'
                    }]
                }
            ],
            listeners: {
                tabchange: 'onTabChange',
                afterrender: 'onAfterRender'
            }
        }
    ]
});