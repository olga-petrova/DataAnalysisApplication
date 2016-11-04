Ext.define('DataAnalysis.model.Quartile', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: '25%',
            type: 'number'
        },
        {
            name: '50%',
            type: 'number'
        },
        {
            name: '75%',
            type: 'number'
        },
        {
            name: 'min',
            type: 'number'
        },
        {
            name: 'max',
            type: 'number'
        }
    ]

});
