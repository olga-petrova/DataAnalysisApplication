/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.map.FreeMoney', {
    extend: 'Ext.panel.Panel',
    xtype: 'freemoney-map',

    requires: [
        'DataAnalysis.store.FreeMoney',
        'DataAnalysis.view.visualization.UStates'
    ],

    title: 'Free money',
    layout: 'fit',
    items: [
        {
            xtype: 'ustatesvisualization',
            bind: {
                store: {
                    type: 'freemoney'
                }
            },
            colorAxis: {
                scale: {
                    type: 'linear',
                    range: ["#789add", "#f17150"]
                },
                field: 'free_money'
            },
            mapAxis: {
                field: 'state'
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
            renderPie: false
        }
    ]
});