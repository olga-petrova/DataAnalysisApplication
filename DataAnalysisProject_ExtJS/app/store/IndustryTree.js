Ext.define('DataAnalysis.store.IndustryTree', {
    extend: 'Ext.data.TreeStore',
    model: 'DataAnalysis.model.IndustryTreeNode',
    requires: [
        'DataAnalysis.reader.IndustryReader'
    ],

    alias: 'store.industrytree',

    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: 'http://localhost/dataanalysisapp/industries.php',
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        reader: {
            type: 'industryreader'
        }
    },
    autoLoad: true,
    root: {
        text: "States"
    }
});
