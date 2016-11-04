Ext.define('DataAnalysis.store.PersonIncomes', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.PersonIncome',

    alias: 'store.personincomes',

    proxy: {
        type: 'ajax',
        url: 'http://localhost/dataanalysisapp/average_incomes.php',
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
