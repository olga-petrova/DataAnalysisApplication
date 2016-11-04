/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.datasources.PeopleList', {
    extend: 'Ext.grid.Panel',
    xtype: 'peoplelist',

    requires: [
        'DataAnalysis.store.People'
    ],

id: 'test-id',
    store: {
        type: 'people'
    },

    columns: [
        {
            xtype: 'rownumberer',
            width: 100
        },
        {
            text: 'serial',
            dataIndex: 'serialno',
            hidden: true
        },
        {
            text: 'State',
            dataIndex: 'state',
            width: 150
        },
        {
            text: 'Sex',
            dataIndex: 'sex',
            width: 70
        },
        {
            text: 'income_adjustment_code',
            dataIndex: 'income_adjustment_code',
            hidden: true
        },
        {
            text: 'dividents',
            dataIndex: 'dividents',
            align: 'right',
            hidden: true
        },
        {
            text: 'all_other_incomes',
            dataIndex: 'all_other_incomes',
            align: 'right',
            hidden: true
        },
        {
            text: 'public_assistance_income',
            dataIndex: 'public_assistance_income',
            align: 'right',
            hidden: true
        },
        {
            text: 'retirement_income',
            dataIndex: 'retirement_income',
            align: 'right',
            hidden: true
        },
        {
            text: 'Education',
            dataIndex: 'educational_attainment',
            width: 150
        },
        {
            text: 'self_employment_income',
            dataIndex: 'self_employment_income',
            align: 'right',
            hidden: true
        },
        {
            text: 'Class of worker',
            dataIndex: 'class_of_worker',
            minWidth: 100,
            flex: 1
        },
        {
            text: 'supplementary_security_income',
            dataIndex: 'supplementary_security_income',
            align: 'right',
            hidden: true
        },
        {
            text: 'social_security_income',
            dataIndex: 'social_security_income',
            align: 'right',
            hidden: true
        },
        {
            text: 'Industry',
            dataIndex: 'industry_record',
            width: 150
        },
        {
            text: 'NAICS_industry_record',
            dataIndex: 'NAICS_industry_record',
            hidden: true
        },
        {
            text: 'Occupation',
            dataIndex: 'occupation',
            width: 150
        },
        {
            text: 'Hours per week',
            dataIndex: 'worked_hours_per_week',
            renderer: function (v){
                return ((v) ? (v + ' hours') : '');
            },
            width: 120
        },
        {
            text: 'Income',
            width: 70,
            dataIndex: 'income_sequence',
            xtype: 'widgetcolumn',
            align: 'center',
            widget: {
                xtype: 'sparklinepie',
                align: 'center',
                sliceColors: ['#109618', '#DC3912', '#FF9900', '#ffff00'],
                tipTpl: '{percent:number("0.0")}%'
            }
        },
        {
            text: 'total_person_earnings',
            dataIndex: 'total_person_earnings' ,
            align: 'right',
            hidden: true
        },
        {
            text: 'Salary income',
            dataIndex: 'salary_income',
            renderer: function (v){
                return ((v) ? ('$' + Ext.util.Format.number(v, '0,000')) : '');
            },
            align: 'right',
            width: 130
        },
        {
            text: 'Total income',
            dataIndex: 'total_person_income',
            renderer: function (v){
                return ((v) ? ('$' + Ext.util.Format.number(v, '0,000')) : '');
            },
            align: 'right',
            width: 120
        },
        {
            text: 'income_to_poverty_ratio',
            dataIndex: 'income_to_poverty_ratio',
            hidden: true
        }
    ]
});
