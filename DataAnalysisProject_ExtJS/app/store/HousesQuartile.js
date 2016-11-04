Ext.define('DataAnalysis.store.HousesQuartile', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.Quartile',

    alias: 'store.housesquartile',

    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: 'app/data/houses_price_quartile.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
