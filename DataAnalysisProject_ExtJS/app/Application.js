/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('DataAnalysis.Application', {
    extend: 'Ext.app.Application',
    
    name: 'DataAnalysis',
    //mainView: 'DataAnalysis.view.main.Main',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        Ext.data.request.Ajax.timeout = 45000;
        Ext.tip.QuickTipManager.init();

        var queryWindow = Ext.create('DataAnalysis.view.query.Window');
        queryWindow.on('close', function () {
            this.setMainView('DataAnalysis.view.main.Main');
            var view = this.getMainView();
            view.getViewModel().set('industry_type', queryWindow.getViewModel().get('industry_type'));
            view.getViewModel().set('occupation', queryWindow.getViewModel().get('occupation'));
            view.down('state-toolbar button').click();
        }, this);
        queryWindow.show();
    }
});
