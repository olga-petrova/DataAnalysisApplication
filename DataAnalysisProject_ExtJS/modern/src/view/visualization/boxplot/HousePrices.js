/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.boxplot.HousePrices', {
    extend: 'Ext.panel.Panel',
    xtype: 'house-prices-boxplot',

    requires: [
        'DataAnalysis.store.HousesQuartile',
        'DataAnalysis.view.visualization.BoxPlot'
    ],

    title: 'House prices distribution',
    scrollable: true,
    items: [{
        xtype: 'boxplot',
        width: 6150,
        scrollable: true,
        bind: {
            store: {
                type: 'housesquartile'
            }
        }
    }]
});