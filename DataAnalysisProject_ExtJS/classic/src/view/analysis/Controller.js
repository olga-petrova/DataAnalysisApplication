/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataAnalysis.view.analysis.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.analysis',

    init: function () {
        this.getViewModel().bind('{state}', this.onBestStateChanged, this);
        this.initGrid(this.lookup('incomesGrid'));
        this.initGrid(this.lookup('freeMoneyGrid'));
        this.initGrid(this.lookup('housesGrid'));
    },

    initGrid: function (grid) {
        var matrix = grid.getMatrix(),
            viewModel = this.getViewModel();
        grid.on('afterrender', function () {
            grid.highlightState(viewModel.get('state'));
        });
        grid.getView().on('refresh', function () {
            grid.highlightState(viewModel.get('state'));
        });
        matrix.on('done', function () {
            grid.highlightState(viewModel.get('state'));
        });
    },

    onBestStateChanged: function () {
        this.adaptGrid(this.lookup('incomesGrid'));
        this.adaptGrid(this.lookup('freeMoneyGrid'));
        this.lookup('housesGrid').highlightState(this.getViewModel().get('state'));
    },

    adaptGrid: function (grid) {
        var matrix = grid.getMatrix(),
            viewModel = this.getViewModel(),
            state = {
                industry_type: viewModel.get('industry_type'),
                occupation: viewModel.get('occupation')
            };
        if (grid.rendered) {
            matrix.extraParams = matrix.extraParams || {};
            if ((state.industry_type != matrix.extraParams.industry_type) || (state.occupation != matrix.extraParams.occupation)) {
                matrix.extraParams = state;
                matrix.startProcess();
            }
        }

    },

    onTabChange: function (tabPanel, tab) {
        this.adaptGrid(tab.down('pivotgrid'));
    },

    onAfterRender: function () {
        this.adaptGrid(this.lookup('incomesGrid'));
    }
});
