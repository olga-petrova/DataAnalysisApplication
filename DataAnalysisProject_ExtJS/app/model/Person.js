Ext.define('DataAnalysis.model.Person', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'income_sequence',
            convert: function (v, record) {
                var total_person_income = record.get('total_person_income'),
                    other_income = Math.round((record.get('dividents') + record.get('all_other_incomes')) * 100 / total_person_income),
                    social_income = Math.round((record.get('public_assistance_income') + record.get('retirement_income') +
                        record.get('supplementary_security_income') + record.get('social_security_income')) * 100 / total_person_income),
                    salary_income = Math.round(record.get('salary_income') * 100 / total_person_income),
                    self_employment_income = Math.round(record.get('self_employment_income') * 100 / total_person_income);
                return [
                    salary_income, self_employment_income, social_income, other_income
                ];
            }
        }
    ]

});
