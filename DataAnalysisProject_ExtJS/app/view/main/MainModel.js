/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DataAnalysis.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'DataAnalysis',

        state: undefined,

        industry_type: undefined,
        occupation: undefined
    }
});
