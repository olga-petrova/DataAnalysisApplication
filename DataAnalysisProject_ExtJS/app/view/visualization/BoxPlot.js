/**
 * This view is an example list of people.
 */
Ext.define('DataAnalysis.view.visualization.BoxPlot', {
    extend: 'Ext.d3.svg.Svg',
    xtype: 'boxplot',

    scrollable: true,
    autoScroll: true,
    config: {
        store: null,
        width: 6200,
        height: 700
    },

    cls: 'boxplot',

    highlightedItem: undefined,

    boxWidth: 120,
    boxHeight: 650,
    boxMargin: {top: 10, right: 45, bottom: 20, left: 45},

    highlight: function (state) {
        if (!Ext.isEmpty(this.highlightedItem)) {
            this.highlightedItem.classed('highlighted', state);
        }
    },

    highlightState: function (state) {
        var scene = this.getScene(),
            item = scene.selectAll("svg").filter(function(d) { return d.state === state; });
        this.highlight(false);
        this.highlightedItem = item;
        this.highlight(true);
    },

    iqr: function(k) {
        return function(d, i) {
            var q1 = d.quartiles[0],
                q3 = d.quartiles[2],
                iqr = (q3 - q1) * k,
                i = -1,
                j = d.length;
            while (d[++i] < q1 - iqr);
            while (d[--j] > q3 + iqr);
            return [i, j];
        };
    },

    prepareData: function () {
        var data = [];
        this.getStore().each(function (item) {
            data.push(item.data);
        });
        return data;
    },

    listeners: {
        scenesetup: function (component, scene) {
            component.setWidth(this.config.width);

            var store = this.getStore(),
                margin = this.boxMargin,
                boxWidth = this.boxWidth,
                boxHeight = this.boxHeight,
                width = boxWidth - margin.left - margin.right,
                height = boxHeight - margin.top - margin.bottom,
                min = store.min('min'),
                max = store.max('max'),
                data = this.prepareData();

            var chart = d3.box(min, max)
                .whiskers(this.iqr(1.5))
                .width(width)
                .height(height);

            chart.domain([min, max]);

            var svg = scene.selectAll("svg")
                .data(data)
                .enter().append("svg")
                .attr('x', function (d, i) {
                    return boxWidth * i;
                })
                .attr("class", "box")
                .attr("width", boxWidth)
                .attr("height", boxHeight)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(chart);

            this.fireEvent('afterrender', this);
        }
    }
});



