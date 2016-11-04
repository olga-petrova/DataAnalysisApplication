Ext.define('DataAnalysis.store.People', {
    extend: 'Ext.data.BufferedStore',
    model: 'DataAnalysis.model.Person',
    requires: ['Ext.data.proxy.JsonP'],

    alias: 'store.people',

    pageSize: 100,
    proxy: {
        type: 'jsonp',
        url: 'http://localhost:4567/test/test/test/people',
        callbackKey: 'callback',
        reader: {
            rootProperty: 'data',
            idProperty: 'id',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});
