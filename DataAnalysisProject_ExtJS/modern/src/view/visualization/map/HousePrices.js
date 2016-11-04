/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.map.HousePrices', {
    extend: 'Ext.panel.Panel',
    xtype: 'house-prices-map',

    requires: [
        'DataAnalysis.store.HousePrices',
        'DataAnalysis.view.visualization.UStates'
    ],

    title: 'House prices',
    layout: 'fit',
    items: [
        {
            xtype: 'ustatesvisualization',
            bind: {
                store: {
                    type: 'houseprices'
                }
            },
            colorAxis: {
                scale: {
                    type: 'linear',
                    range: ["#789add", "#f17150"]
                },
                field: 'price'
            },
            mapAxis: {
                field: 'state'
            },
            pieAxis: {
                field: 'income_types'
            },
            mapLegend: {
                docked: 'right',
                padding: 50,
                items: {
                    count: 5,
                    slice: [1],
                    reverse: true,
                    size: {
                        x: 60,
                        y: 30
                    }
                }
            },
            pieLegend: {
                docked: 'right',
                padding: 50,
                items: {
                    count: 5,
                    slice: [1],
                    reverse: true,
                    size: {
                        x: 60,
                        y: 30
                    }
                },
                arcs: [
                    {
                        "label": "Full incomes",
                        "color": "#109618"
                    },
                    {
                        "label": "Gross rent",
                        "color": "#DC3912"
                    }
                ]
            }
        }
    ]
});