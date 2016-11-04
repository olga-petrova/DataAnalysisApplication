Ext.define('DataAnalysis.model.House', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: "gross_rent_monthly_owner_cost_sequence",
            convert: function(v, record){
                var mountly_owner_cost = record.get("mountly_owner_cost_as_percentage"),
                    gross_rent = record.get("gross_rent_as_percentage");
                if ((mountly_owner_cost == 0) && (gross_rent == 0)) {
                    return [];
                }
                v = Math.min(mountly_owner_cost || gross_rent, 100);
                return [v, 100 - v];
            }
        }
    ]
});
