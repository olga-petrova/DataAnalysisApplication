Ext.define('DataAnalysis.view.visualization.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'visualization-panel',
    requires: [
        'DataAnalysis.view.visualization.boxplot.Incomes',
        'DataAnalysis.view.visualization.map.Incomes',

        'DataAnalysis.view.visualization.boxplot.FreeMoney',
        'DataAnalysis.view.visualization.map.FreeMoney',

        'DataAnalysis.view.visualization.boxplot.HousePrices',
        'DataAnalysis.view.visualization.map.HousePrices',

        'DataAnalysis.view.visualization.HighestPayingIndustriesTree',

        'DataAnalysis.view.visualization.Controller'
    ],

    controller: 'visualization',

    title: 'Visualization',

    layout: 'fit',

    items: [
        {
            xtype: 'tabpanel',
            layout: 'fit',
            items: [
                {
                    title: 'Incomes',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    autoScroll: true,
                    items: [
                        {
                            xtype: 'incomes-boxplot',
                            reference: 'incomesBoxplot'
                        },
                        {
                            xtype: 'incomes-map',
                            reference: 'incomesMap'
                        },
                        {
                            xtype: 'highest-paying-industries-tree',
                            reference: 'industryTree'
                        }
                    ]
                },
                {
                    title: 'Housing',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    autoScroll: true,
                    items: [
                        {
                            xtype: 'house-prices-boxplot',
                            reference: 'housesBoxplot'
                        },
                        {
                            xtype: 'house-prices-map',
                            reference: 'housesMap'
                        }
                    ]
                },
                {
                    title: 'Purchasing power',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    autoScroll: true,
                    items: [
                        {
                            xtype: 'freemoney-boxplot',
                            reference: 'freeMoneyBoxplot'
                        },
                        {
                            xtype: 'freemoney-map',
                            reference: 'freeMoneyMap'
                        }
                    ]
                }
            ]
        }
    ]
});