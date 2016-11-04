/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.datasources.HousesList', {
    extend: 'Ext.grid.Grid',
    xtype: 'houseslist',

    requires: [
        'DataAnalysis.store.Houses'
    ],


    store: {
        type: 'houses'
    },

    columns: [
        {
            xtype: 'rownumberer',
            width: 100
        },
        {
            text: 'State',
            dataIndex: 'state',
            width: 150
        },
        {
            text: 'Building',
            dataIndex: 'building',
            flex: 1
        },
        {
            text: 'housing_adjustment_code',
            dataIndex: 'housing_adjustment_code',
            hidden:true
        },
        {
            text: 'income_adjusment_code',
            dataIndex: 'income_adjusment_code',
            hidden: true
        },
        {
            text: 'Condo fee',
            dataIndex: 'condo_fee',
            align: 'right',
            hidden: true
        },
        {
            text: 'Count of rooms',
            dataIndex: 'number_of_rooms',
            renderer: function (v){return ((v) ? (v + ' rooms') : '');},
            width: 130
        },
        {
            text: 'mounthly_rent',
            dataIndex: 'mounthly_rent',
            align: 'right',
            hidden: true
        },
        {
            text: 'Property value',
            dataIndex: 'property_value',
            align: 'right',
            renderer: function (v){
                return ((v) ? ('$' + Ext.util.Format.number(v, '0,000')) : '');
            },
            width: 140
        },
        {
            text: 'Year of creation',
            dataIndex: 'year_of_creation',
            width: 130
        },
        {
            text: 'Family income',
            dataIndex: 'family_income',
            align: 'right',
            renderer: function (v){
                return ((v) ? ('$' + Ext.util.Format.number(v, '0,000')) : '');
            },
            hidden: true  },
        {
            text: 'gross_rent',
            dataIndex: 'gross_rent',
            align: 'right',
            hidden:true
        },
        {
            text: 'gross_rent_as_percentage',
            dataIndex: 'gross_rent_as_percentage',
            hidden: true
        },
        {
            text: 'Household income',
            dataIndex: 'household_income',
            renderer: function (v){
                return ((v) ? ('$' + Ext.util.Format.number(v, '0,000')) : '');
            },
            align: 'right',
            width: 160
        },
        {
            text: 'mountly_owner_cost_as_percentage',
            dataIndex: 'mountly_owner_cost_as_percentage',
            hidden: true
        },
        {
            text: 'Monthly cost',
            dataIndex: 'gross_rent',
            renderer: function (v, meta, record){
                v = (record.get('gross_rent')||0)  + (record.get('mounthly_owner_cost')||0);
                return ((v) ? ('$' + Ext.util.Format.number(v, '0,000')) : '');
            },
            align: 'right',
            width: 120
        },
        {
            text: 'Monthly cost',
            width: 100,
            dataIndex: 'gross_rent_monthly_owner_cost_sequence',
            xtype: 'widgetcolumn',
            align: 'center',
            widget: {
                xtype: 'sparklinepie',
                align: 'center',
                sliceColors: ['#DC3912', '#109618'],
                tipTpl: '{percent:number("0.0")}%'
            }
        },
        {
            text: 'mounthly_owner_cost',
            dataIndex: 'mounthly_owner_cost',
            align: 'right',
            hidden: true
        },
        {
            text: 'Property taxes',
            dataIndex: 'property_taxes',
            width: 160
        }
    ]
});
