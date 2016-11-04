/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataAnalysis.view.query.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.querycontroller',

    search: function () {
        this.getView().close();
    }
});
