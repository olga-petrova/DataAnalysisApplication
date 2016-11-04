Ext.define('DataAnalysis.store.HousesUnbuffered', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.House',
    requires: ['Ext.data.proxy.JsonP'],

    alias: 'store.housesunbuffered',

    proxy: {
        type: 'jsonp',
        url: 'http://localhost:4567/test/test/test/houses',
        callbackKey: 'callback',
        limitParam: '',
        pageParam: '',
        extraParams: {
            limit: 10000
        },
        reader: {
            rootProperty: 'data',
            idProperty: 'serial'
        }
    },
    autoLoad: true
});
