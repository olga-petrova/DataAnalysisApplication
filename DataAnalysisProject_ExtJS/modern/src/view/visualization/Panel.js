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
            tabBarPosition: 'top',
            items: [
                {
                    title: 'Incomes',
                    layout: {
                        type: 'vbox'
                    },
                    scrollable: true,
                    items: [
                        {
                            xtype: 'incomes-boxplot',
                            reference: 'incomesBoxplot',
                            scrollable: true,
                            flex: 1
                        },
                        {
                            xtype: 'incomes-map',
                            reference: 'incomesMap',
                            scrollable: true,
                            flex: 1
                        },
                        {
                            xtype: 'highest-paying-industries-tree',
                            reference: 'industryTree',
                            scrollable: true,
                            flex: 1
                        }
                    ]
                },
                {
                    title: 'Housing',
                    layout: {
                        type: 'vbox'
                    },
                    scrollable: true,
                    items: [
                        {
                            xtype: 'house-prices-boxplot',
                            reference: 'housesBoxplot',
                            scrollable: true,
                            flex: 1
                        },
                        {
                            xtype: 'house-prices-map',
                            reference: 'housesMap',
                            scrollable: true,
                            flex: 1
                        }
                    ]
                },
                {
                    title: 'Income after housing',
                    layout: {
                        type: 'vbox'
                    },
                    scrollable: true,
                    items: [
                        {
                            xtype: 'freemoney-boxplot',
                            reference: 'freeMoneyBoxplot',
                            scrollable: true,
                            flex: 1
                        },
                        {
                            xtype: 'freemoney-map',
                            reference: 'freeMoneyMap',
                            scrollable: true,
                            flex: 1
                        }
                    ]
                }
            ]
        }
    ]
});