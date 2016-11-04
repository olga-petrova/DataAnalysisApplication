/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.boxplot.FreeMoney', {
    extend: 'Ext.panel.Panel',
    xtype: 'freemoney-boxplot',

    requires: [
        'DataAnalysis.store.FreeMoneyQuartile',
        'DataAnalysis.view.visualization.BoxPlot'
    ],

    title: 'Free money distribution',
    scrollable: true,
    items: [{
        xtype: 'boxplot',
        width: 6150,
        scrollable: true,
        bind: {
            store: {
                type: 'freemoneyquartile'
            }
        }
    }]
});