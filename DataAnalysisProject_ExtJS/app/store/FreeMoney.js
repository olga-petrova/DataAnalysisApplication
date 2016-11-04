Ext.define('DataAnalysis.store.FreeMoney', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.FreeMoney',

    alias: 'store.freemoney',

    proxy: {
        type: 'ajax',
        url: 'http://localhost/dataanalysisapp/free_money.php',
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        reader : {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
