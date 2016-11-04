/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataAnalysis.view.visualization.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.visualization',

    init: function () {
        this.getViewModel().bind('{state}', this.onBestStateChanged, this);
        this.initMap('incomesMap');
        this.initMap('housesMap');
        this.initMap('freeMoneyMap', true);
        this.initBoxplot('incomesBoxplot');
        this.initBoxplot('housesBoxplot');
        this.initBoxplot('freeMoneyBoxplot');
        this.initIndustryTree();
    },

    initMap: function (name) {
        var map = this.lookup(name).down('ustatesvisualization'),
            viewModel = this.getViewModel();
        map.on('afterrender', function () {
            map.highlightState(viewModel.get('state'));
        });
        map.on('refresh', function () {
            map.highlightState(viewModel.get('state'));
        });
    },

    initBoxplot: function (name) {
        var boxplot = this.lookup(name).down('boxplot'),
            viewModel = this.getViewModel();
        boxplot.on('afterrender', function () {
            boxplot.highlightState(viewModel.get('state'));
        });
        boxplot.on('refresh', function () {
            boxplot.highlightState(viewModel.get('state'));
        });
    },

    initIndustryTree: function () {
        var industryTree = this.lookup('industryTree').down('d3-horizontal-tree'),
            viewModel = this.getViewModel();
        industryTree.on('scenerender', function () {
            industryTree.highlightState(viewModel.get('state'));
        });

    },

    onBestStateChanged: function () {
        this.adaptMap('incomesMap', true);
        this.adaptMap('housesMap', false);
        this.adaptMap('freeMoneyMap', true);
        this.adaptIndustryTree();
        this.adaptBoxplot('incomesBoxplot');
        this.adaptBoxplot('housesBoxplot');
        this.adaptBoxplot('freeMoneyBoxplot');
    },

    reloadMap: function (name) {
        var map = this.lookup(name).down('ustatesvisualization'),
            store = map.getStore(),
            proxy = store.getProxy(),
            viewModel = this.getViewModel();
        proxy.abort();
        proxy.setExtraParam('industry_type', viewModel.get('industry_type'));
        proxy.setExtraParam('occupation', viewModel.get('occupation'));
        store.reload({
            success: function () {
                map.highlightState(viewModel.get('state'));
            }
        });
    },

    adaptMap: function (name, reload) {
        var map = this.lookup(name).down('ustatesvisualization'),
            store = map.getStore(),
            viewModel = this.getViewModel();
        if (!Ext.isEmpty(store)) {
            if (reload) {
                this.reloadMap(name);
            } else {
                map.highlightState(viewModel.get('state'));
            }
        } else {
            map.on({
                refresh: {
                    fn: function () {
                        this.reloadMap(name);
                    },
                    scope: this,
                    single: true
                }
            })
        }

    },

    adaptBoxplot: function (name) {
        var boxplot = this.lookup(name).down('boxplot'),
            store = boxplot.getStore(),
            viewModel = this.getViewModel();
        if (!Ext.isEmpty(store)) {
            boxplot.highlightState(viewModel.get('state'));
        } else {
            boxplot.on({
                afterrender: {
                    fn: function () {
                        boxplot.highlightState(viewModel.get('state'));
                    },
                    scope: this,
                    single: true
                }
            })
        }
    },

    reloadIndustryTree: function () {
        var industryTree = this.lookup('industryTree').down('d3-horizontal-tree'),
            store = industryTree.getStore(),
            proxy = store.getProxy(),
            viewModel = this.getViewModel();
        proxy.setExtraParam('industry_type', viewModel.get('industry_type'));
        proxy.setExtraParam('occupation', viewModel.get('occupation'));
        proxy.abort();
        store.reload({
            success: function () {
                industryTree.highlightState(viewModel.get('state'));
            }
        });

    },
    adaptIndustryTree: function () {
        var industryTree = this.lookup('industryTree').down('d3-horizontal-tree'),
            store = industryTree.getStore();
        if (!Ext.isEmpty(store)) {
            this.reloadIndustryTree();
        } else {
            industryTree.on({
                scenerender: {
                    fn: function () {
                        this.reloadIndustryTree();
                    },
                    scope: this,
                    single: true
                }
            })
        }
    }

});
