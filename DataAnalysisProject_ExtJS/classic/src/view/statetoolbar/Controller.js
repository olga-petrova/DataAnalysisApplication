/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataAnalysis.view.statetoolbar.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.statetoolbar',

    stateLabel: 'Best state: {0}',
    stateDescription: 'The best location for you to live, taking in to account your Industry and Occupation is <b>{0}</b>. See below to find out why.',

    updateBestState: function () {
        var viewModel = this.getViewModel(),
            industry_type = viewModel.get('industry_type'),
            occupation = viewModel.get('occupation'),
            stateField = this.lookup('stateField'),
            stateDescription = this.lookup('stateDescription');
        Ext.Ajax.request({
            url: 'http://localhost/dataanalysisapp/best_state.php',
            method: 'POST',
            jsonData: {
                industry_type: industry_type,
                occupation: occupation
            },
            success: function (response) {
                var result = Ext.decode(response.responseText);
                stateField.setValue(new Ext.XTemplate(this.stateLabel).apply([result.state]));
                stateDescription.setHtml(new Ext.XTemplate(this.stateDescription).apply([result.state]));
                viewModel.set('state', result.state);
                viewModel.set('industry_type', industry_type);
                viewModel.set('occupation', occupation);
            },
            scope: this
        });
    }
});
