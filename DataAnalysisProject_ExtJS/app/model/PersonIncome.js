Ext.define('DataAnalysis.model.PersonIncome', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: "total_income",
            type: "number"
        },
        {
            name: 'income_types',
            convert: function (v, record) {

                return [
                    {
                        "label": "Other incomes",
                        "value": record.get("other_incomes"),
                        "color": "#ffff00"
                    },
                    {
                        "label": "Social incomes",
                        "value": record.get("social_incomes"),
                        "color": "#FF9900"
                    },
                    {
                        "label": "Salary incomes",
                        "value": record.get("salary_income"),
                        "color": "#109618"
                    },
                    {
                        "label": "Self employment incomes",
                        "value": record.get("self_employment_income"),
                        "color": "#DC3912"
                    }
                ];
            }
        }
    ]

});
