Ext.define('DataAnalysis.store.PersonQuartile', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.Quartile',

    alias: 'store.personquartile',

    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: 'app/data/income_quartile.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
