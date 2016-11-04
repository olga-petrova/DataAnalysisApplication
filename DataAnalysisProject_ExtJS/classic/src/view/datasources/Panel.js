Ext.define('DataAnalysis.view.datasources.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'datasources-panel',
    requires: [
        'DataAnalysis.view.datasources.HousesList',
        'DataAnalysis.view.datasources.PeopleList'
    ],

    title: 'Data Sources',

    layout: 'fit',

    items: [
        {
            xtype: 'tabpanel',
            layout: 'fit',
            items: [
                {
                    title: 'Incomes',
                    layout: 'fit',
                    items: [{
                        xtype: 'peoplelist'
                    }]
                },
                {
                    title: 'Housing',
                    layout: 'fit',
                    items: [{
                        xtype: 'houseslist'
                    }]
                }
            ]
        }
    ]
});