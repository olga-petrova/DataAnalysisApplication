/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataAnalysis.view.query.Window', {
    extend: 'Ext.window.Window',
    xtype: 'query-window',
    requires: ['DataAnalysis.component.OccupationCombobox',
        'DataAnalysis.store.Occupations'],

    layout: {
        type: 'vbox',
        align: 'center'
    },

    controller: 'querycontroller',
    viewModel: 'querymodel',

    header: false,
    width: 520,
    padding: 20,
    monitorResize: true,
    frame: 0,
    shadow: 0,
    cls: 'query-window',

    items: [
        {
            xtype: 'container',
            html: 'Where is the best place for me to live?',
            cls: 'title'
        },
        {
            xtype: 'container',
            html: 'Specify the Industry and Occupation you work in, to find out',
            margin: '0 0 10 0'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Industry',
            labelAlign: 'top',
            labelSeparator: '',
            width: 450,
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
            fieldLabel: 'Occupation',
            width: 450,
            labelSeparator: '',
            labelAlign: 'top',
            xtype: 'occupation-combobox',
            displayField: 'occupation',
            store: {
                type: 'occupations'
            },
            minChars: 3,

            queryParam: 'q',
            queryMode: 'remote',
            reference: 'occupationCombobox',
            bind: {
                value: '{occupation}',
                industryType: '{industry_type}'
            }
        },
        {
            xtype: 'button',
            width: 100,
            text: 'Search',
            handler: 'search'
        }
    ],

    onWindowResize: function() {
        this.callParent();
        this.center();
    }
});



