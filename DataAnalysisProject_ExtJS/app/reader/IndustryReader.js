Ext.define('DataAnalysis.reader.IndustryReader', {
    extend: 'Ext.data.reader.Json',

    alias: 'reader.industryreader',

    getResponseData: function(response) {
        var data = this.callParent([response]);
        if (!Ext.isEmpty(response.request.params['industry_type'])) {
            return this.addTreeHierarchy(data.data, 1);
        } else {
            return this.addTreeHierarchy(data.data, 2);
        }
    },

    addTreeHierarchy: function (data, levels) {
        if (levels == 1) {
            return this.addTreeLevel(this.addTreeLevel(data, 'industry_record', ['salary', 'state', 'industry_type'], 'occupation'), 'state', ['salary'], 'industry_record');
        } else {
            return this.addTreeLevel(this.addTreeLevel(this.addTreeLevel(data, 'industry_record', ['salary', 'state', 'industry_type'], 'occupation'), 'industry_type', ['salary', 'state'], 'industry_record'), 'state', [], 'state');
        }

    },

    addTreeLevel: function (data, fieldName, fieldsToCopy, notBlank) {
        var tree = [], currentValue, parentItem, text;
        Ext.Array.each(data, function (item) {
            if (item[fieldName] != currentValue) {
                currentValue = item[fieldName];
                parentItem = {};
                parentItem[fieldName] = currentValue;
                parentItem.text = currentValue;
                Ext.Array.each(fieldsToCopy, function (field) {
                    parentItem[field] = item[field];
                });
                parentItem.children = [];
                tree.push(Ext.apply(parentItem));
            }
            text = item[notBlank];
            if (text) {
                if (Ext.isEmpty(item.children)) {
                    item.leaf = true;
                }
                if (Ext.isEmpty(item.text)) {
                    item.text = text;
                }
                tree[tree.length - 1].children.push(item);
            }
        });
        return tree;
    }
});
