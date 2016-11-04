/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.boxplot.Incomes', {
    extend: 'Ext.panel.Panel',
    xtype: 'incomes-boxplot',

    requires: [
        'DataAnalysis.store.PersonQuartile',
        'DataAnalysis.view.visualization.BoxPlot'
    ],

    title: 'Incomes distribution',
    scrollable: true,
    items: [{
        xtype: 'boxplot',
        width: 6150,
        scrollable: true,
        bind: {
            store: {
                type: 'personquartile'
            }
        }
    }]
});