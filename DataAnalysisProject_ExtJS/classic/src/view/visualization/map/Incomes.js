/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.map.Incomes', {
    extend: 'Ext.panel.Panel',
    xtype: 'incomes-map',

    requires: [
        'DataAnalysis.store.PersonIncomes',
        'DataAnalysis.view.visualization.UStates'
    ],

    title: 'Incomes',
    layout: 'fit',
    items: [
        {
            xtype: 'ustatesvisualization',
            bind: {
                store: {
                    type: 'personincomes'
                }
            },
            colorAxis: {
                scale: {
                    type: 'linear',
                    range: ["#789add", "#f17150"]
                },
                field: 'total_income'
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
                        "label": "Salary incomes",
                        "color": "#109618"
                    },
                    {
                        "label": "Self employment incomes",
                        "color": "#DC3912"
                    },
                    {
                        "label": "Social incomes",
                        "color": "#FF9900"
                    },
                    {
                        "label": "Other incomes",
                        "color": "#ffff00"
                    }
                ]
            }
        }
    ]
});