Ext.define('DataAnalysis.store.FreeMoneyQuartile', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.Quartile',

    alias: 'store.freemoneyquartile',

    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: 'app/data/free_money_quartile.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
