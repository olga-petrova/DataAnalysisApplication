Ext.define('DataAnalysis.model.HousePrice', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: "price",
            type: "number"
        },
        {
            name: 'income_types',
            convert: function (v, record) {

                return [
                    {
                        "label": "Gross rent",
                        "value": record.get("gross_rent_as_percentage"),
                        "color": "#DC3912"
                    },
                    {
                        "label": "Full incomes",
                        "value": (100 - record.get("gross_rent_as_percentage")),
                        "color": "#109618"
                    }
                ];
            }
        }
    ]

});
