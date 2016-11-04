/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataAnalysis.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DataAnalysis.view.main.MainController',
        'DataAnalysis.view.main.MainModel',

        'DataAnalysis.view.datasources.Panel',
        'DataAnalysis.view.analysis.Panel',
        'DataAnalysis.view.visualization.Panel',

        'DataAnalysis.view.statetoolbar.Toolbar'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,


    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Where should I live?'
            },
            flex: 0
        },
        height: 50
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    tbar: {
        xtype: 'state-toolbar',
        height: 96
    },

    activeTab: 0,
    items: [{
        xtype: 'datasources-panel'
    }, {
        xtype: 'analysis-panel'
    }, {
        xtype: 'visualization-panel'
    }]
});



