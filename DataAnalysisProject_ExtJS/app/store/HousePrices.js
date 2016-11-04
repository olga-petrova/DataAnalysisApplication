Ext.define('DataAnalysis.store.HousePrices', {
    extend: 'Ext.data.Store',
    model: 'DataAnalysis.model.HousePrice',

    alias: 'store.houseprices',

    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: 'app/data/house_price_per_state.json'
    },
    autoLoad: true
});
