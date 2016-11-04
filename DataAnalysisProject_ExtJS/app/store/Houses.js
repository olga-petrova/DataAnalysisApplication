Ext.define('DataAnalysis.store.Houses', {
    extend: 'Ext.data.BufferedStore',
    model: 'DataAnalysis.model.House',
    requires: ['Ext.data.proxy.JsonP'],

    alias: 'store.houses',

    pageSize: 100,
    proxy: {
        type: 'jsonp',
        url: 'http://localhost:4567/test/test/test/houses',
        callbackKey: 'callback',
        reader: {
            rootProperty: 'data',
            idProperty: 'serial',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});


