/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataAnalysis.component.OccupationCombobox', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'occupation-combobox',


    config: {
        industryType: undefined
    },

    getParams: function(queryString) {
        var params = {},
            param = this.queryParam;

        if (param) {
            params[param] = queryString;
        }
        params['industry_type'] = this.getIndustryType();
        return params;
    }
});



