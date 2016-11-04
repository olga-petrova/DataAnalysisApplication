Ext.define('DataAnalysis.store.IndustryStore', {
    extend: 'Ext.data.ArrayStore',

    alias: 'store.industry',
    fields: ['value'],

    data: [
        ['Agriculture'],
        ['Construction'],
        ['Educational Services'],
        ['Entertainment'],
        ['Finance'],
        ['Health Car'],
        ['Information'],
        ['Manufacturing'],
        ['Military'],
        ['Mining'],
        ['Professional Services'],
        ['Public Administration'],
        ['Retail Trade'],
        ['Services'],
        ['Social Assistance'],
        ['Transportation'],
        ['Unemployment'],
        ['Utilities'],
        ['Wholesale Trade']
    ]
});

