/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.Visualizations', {
    extend: 'Ext.panel.Panel',
    xtype: 'visualizations'//,

    /*requires: [
        'DataAnalysis.store.HousePrices',
        'DataAnalysis.store.HousesUnbuffered',
        'DataAnalysis.store.PersonIncomes',
        'DataAnalysis.store.IndustryTree',
        'DataAnalysis.store.HousesQuartile',
        'DataAnalysis.store.PersonQuartile',

        'DataAnalysis.view.visualization.UStates',
        'DataAnalysis.view.visualization.BoxPlot',
        'Ext.d3.hierarchy.tree.HorizontalTree',
        'Ext.d3.interaction.PanZoom',

        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Scatter'
    ],*/

   /* title: 'Visualizations',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'panel',
        title: 'House price distribution',
        //layout: 'fit',
        autoScroll: true,
        items: [
        {
            xtype: 'boxplot',
            autoScroll: true,
            bind: {
                store: {
                    type: 'housesquartile'
                }
            }
        }]
    },
        {
            xtype: 'panel',
            title: 'Incomes distribution',
            //layout: 'fit',
            autoScroll: true,
            items: [
                {
                    xtype: 'boxplot',
                    autoScroll: true,
                    bind: {
                        store: {
                            type: 'personquartile'
                        }
                    }
                }]
        },
        {
        xtype: 'panel',
        title: 'Average incomes',
        layout: 'fit',
        items: [
            {
                xtype: 'ustatesvisualization',
                bind: {
                    store: {
                        type: 'personincomes'
                    }
                },
                valueFieldLabel: 'Average incomes',
                valueFieldName: "total_income",
                getPieForRecord: function (record) {
                    if (Ext.isEmpty(record)) {
                        return [];
                    }
                    return [
                        {
                            "label": "Other incomes",
                            "value": record.get("other_incomes"),
                            "color": "#ffff00"
                        },
                        {
                            "label": "Social incomes",
                            "value": record.get("social_incomes"),
                            "color": "#FF9900"
                        },
                        {
                            "label": "Salary incomes",
                            "value": record.get("salary_income"),
                            "color": "#109618"
                        },
                        {
                            "label": "Self employment incomes",
                            "value": record.get("self_employment_income"),
                            "color": "#DC3912"
                        }
                    ];
                },
                getPieLegendColors: function () {
                    return [
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
                    ];
                }
            }
        ]
    },
    {
        xtype: 'panel',
        title: 'Average house prices',
        layout: 'fit',
        items: [
            {
                xtype: 'ustatesvisualization',
                bind: {
                    store: {
                        type: 'houseprices'
                    }
                },
                valueFieldLabel: 'Average price',
                valueFieldName: "price",
                roundTo: 10000,
                getPieForRecord: function (record) {
                    if (Ext.isEmpty(record)) {
                        return [];
                    }
                    return [
                        {
                            "label": "Gross rent",
                            "value": record.get("gross_rent_as_percentage"),
                            "color": "#DC3912"
                        },
                        {
                            "label": "Full incomes",
                            "value": (100 - record.get("gross_rent_as_percentage")),
                            "color": "#109618"
                        }
                    ];
                },
                getPieLegendColors: function () {
                    return [
                        {
                            "label": "Full incomes",
                            "color": "#109618"
                        },
                        {
                            "label": "Gross rent",
                            "color": "#DC3912"
                        }
                    ];
                }
            }
        ]
    },
        {
            xtype: 'panel',
            title: 'Highest-paying industries',
            layout: 'fit',
            height: 1000,
            width: 1500,
            items: [
                {
                    margin: 20,
                    xtype: 'd3-horizontal-tree',
                    nodeText: function (element, record) {
                        var value = record.get('text');
                        if (!Ext.isEmpty(record.get('salary'))) {
                            value += ' ($ ' + Ext.util.Format.number(record.get('salary'), '0,000') + ')';
                        }
                        return value;
                    },
                    addLinks: function (selection) {
                        selection
                            .append('path')
                            .classed(this.defaultCls.link, true)
                            //.attr("stroke-width", function (d) {debugger})
                            .attr('d', this.getDiagonal());
                    },
                    interactions: {
                        type: 'panzoom',
                        zoom: {
                            extent: [0.3, 3],
                            doubleTap: false
                        }
                    },
                    nodeSize: [20, 250],
                    bind: {
                        store: {
                            type: 'industrytree'
                        }
                    }
                }
            ]
        }/*,
        {
            xtype: 'panel',
            title: 'House prices distribution',
            layout: 'fit',
            height: 1000,
            width: 1500,
            items: [
                {
                    xtype: 'cartesian',
                    width: '100%',
                    height: 600,
                    innerPadding: 20,
                    store: {
                        type: 'housesunbuffered'
                    },
                    interactions: [
                        'itemhighlight'
                    ],
                    axes: [{
                        type: 'category',
                        position: 'bottom',
                        fields: 'state',
                        title: 'United States'
                    }, {
                        type: 'numeric',
                        position: 'left',
                        fields: 'property_value',
                        title: 'House price'
                    }],
                    series: [{
                        type: 'scatter',
                        xField: 'state',
                        yField: 'property_value',
                        marker: {
                            radius: 2,
                            fill: '#3399ff'
                        },
                        highlight: {
                            fillStyle: 'yellow',
                            lineWidth: 2
                        },
                        style: {
                           selectionTolerance: 2
                        }/*,
                        label: {
                            field: 'property_value',
                            display: 'over',
                            fontSize: 10,
                            translateY: 5
                        }*//*
                    }]
                }
            ]
        }]*/
});






