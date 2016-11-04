Ext.define('DataAnalysis.store.Occupations', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.Occupation',

    alias: 'store.occupations',

    proxy: {
        type: 'ajax',
        url: 'http://localhost/dataanalysisapp/occupation.php',
        reader: {
            rootProperty: 'data'
        }
    },
    autoLoad: false
});


