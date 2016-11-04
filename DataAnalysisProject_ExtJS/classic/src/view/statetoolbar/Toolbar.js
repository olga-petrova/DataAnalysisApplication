Ext.define('DataAnalysis.view.statetoolbar.Toolbar', {
    extend: 'Ext.container.Container',
    xtype: 'state-toolbar',
    requires: [
        'DataAnalysis.store.IndustryStore',
        'DataAnalysis.view.statetoolbar.Controller',
        'Ext.form.field.Display',
        'DataAnalysis.component.OccupationCombobox',
        'DataAnalysis.store.Occupations'
    ],

    controller: 'statetoolbar',

    events: ['beststatechanged'],

    title: 'Analysis',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            margin: '10 10 10 10',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Industry',
                    name: 'BaseValue.IntegerItem',
                    store: {
                        type: 'industry'
                    },
                    queryMode: 'local',
                    displayField: 'value',
                    valueField: 'value',
                    reference: 'industryCombobox',
                    bind: {
                        value: '{industry_type}'
                    }
                },
                {
                    xtype: 'occupation-combobox',
                    fieldLabel: 'Occupation',
                    reference: 'occupationCombobox',
                    margin:'0 0 0 20',
                    bind: {
                        value: '{occupation}',
                        industryType: '{industry_type}'
                    },
                    width: 500,
                    displayField: 'occupation',
                    store: {
                        type: 'occupations'
                    },
                    minChars: 3,
                    queryParam: 'q',
                    queryMode: 'remote'
                },
                {
                    xtype: 'button',
                    width: 50,
                    text: 'OK',
                    margin:'0 0 0 20',
                    handler: 'updateBestState'
                },
                {
                    xtype: 'displayfield',
                    reference: 'stateField',
                    cls: 'best-state',
                    value: '',
                    margin:'0 0 0 20'
                }
            ]
        },
        {
            xtype: 'container',
            html: '',
            reference: 'stateDescription',
            margin: '0 10 0 10'
        }
    ]
});