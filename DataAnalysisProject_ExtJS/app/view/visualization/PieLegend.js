Ext.define('DataAnalysis.view.visualization.PieLegend', {
    extend: 'Ext.d3.legend.Color',

    config: {
        arcs: []
    },

    onUpdateItems: function (selection) {
        var me = this,
            items = me.getItems(),
            docked = me.getDocked(),
            blocks, labels;

        blocks = selection.select('rect')
            .attr('width', items.size.x)
            .attr('height', items.size.y)
            .style('fill', function (d) {
                return d.color;
            });

        labels = selection.select('text')
            .each(function () {
                Ext.d3.Helpers.setDominantBaseline(this, 'middle');
            })
            .attr('text-anchor', 'start')
            .text(function (d) {
                return d.label;
            });

        switch (docked) {
            case 'left':
            case 'right':
                blocks.attr('transform', function (data, index) {
                    return 'translate(0,' + index * items.size.y + ')';
                });
                labels
                    .attr('x', items.size.x + 10)
                    .attr('y', function (data, index) {
                        return (index + 0.5) * items.size.y;
                    });
                break;
            case 'top':
            case 'bottom':
                blocks.attr('transform', function (data, index) {
                    return 'translate(' + index * items.size.x + ',0)';
                });
                labels
                    .attr('x', function (data, index) {
                        return (index + 0.5) * items.size.x;
                    })
                    .attr('y', items.size.y)
                    .attr('dy', '1em');
                break;
        }
    },

    updateItems: function () {
        var me = this,
            itemSelection = me.getRenderedItems(),
            arcs = this.getArcs(),
            updateSelection;

        updateSelection = itemSelection.data(arcs);

        me.onAddItems(updateSelection.enter());
        me.onUpdateItems(updateSelection);
        me.onRemoveItems(updateSelection.exit());
    }

});
