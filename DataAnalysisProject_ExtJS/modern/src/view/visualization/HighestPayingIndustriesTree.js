/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.HighestPayingIndustriesTree', {
    extend: 'Ext.panel.Panel',
    xtype: 'highest-paying-industries-tree',

    requires: [
        'DataAnalysis.store.IndustryTree',
        'Ext.d3.hierarchy.tree.HorizontalTree',
        'Ext.d3.interaction.PanZoom'
    ],

    title: 'Highest-paying industries',
    layout: 'fit',
    items: [
        {
            margin: 20,
            xtype: 'd3-tree',
            interactions: {
                type: 'panzoom',
                zoom: {
                    extent: [0.3, 3],
                    doubleTap: false
                }
            },

            nodeText: function (element, record) {
                var value = record.get('text');
                if (!Ext.isEmpty(record.get('salary'))) {
                    value += ' ($ ' + Ext.util.Format.number(record.get('salary'), '0,000') + ')';
                }
                return value;
            },
            nodeSize: [20, 350],
            bind: {
                store: {
                    type: 'industrytree'
                }
            },
            height: 1000,
            width: 1500,

            highlightedItem: undefined,
            highlightState: function (state) {
                var stateItem = this.getStore().findRecord("state", state);
                if (!Ext.isEmpty(this.highlightedItem)) {
                    this.highlightedItem.classed('highlighted', false);
                }
                this.highlightedItem = this.findNode(stateItem);
                if (!Ext.isEmpty(this.highlightedItem)) {
                    this.highlightedItem.classed('highlighted', true);
                };
            }
        }]
});


