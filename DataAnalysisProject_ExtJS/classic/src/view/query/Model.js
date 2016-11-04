/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DataAnalysis.view.query.Model', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.querymodel',

    data: {
        industry_type: undefined,
        occupation: undefined
    }
});
