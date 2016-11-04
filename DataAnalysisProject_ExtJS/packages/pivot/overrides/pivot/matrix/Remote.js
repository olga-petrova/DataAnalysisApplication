Ext.define('Ext.pivot.matrix.Remote', {
    override :'Ext.pivot.matrix.Remote',

    timeout: 60000,

    delayedProcess: function(){
        var me = this,
            matrix = me.serialize(),
            ret, params;

        params = Ext.apply(this.extraParams || {}, {
            keysSeparator:  me.keysSeparator,
            grandTotalKey:  me.grandTotalKey,
            leftAxis:       matrix.leftAxis,
            topAxis:        matrix.topAxis,
            aggregate:      matrix.aggregate
        });

        ret = me.fireEvent('beforerequest', me, params);

        if(ret !== false){
            if(Ext.isFunction(me.onBeforeRequest)){
                ret = me.onBeforeRequest(params);
            }
        }

        if(ret === false){
            me.endProcess();
        }else{
            // do an Ajax call to the configured URL and fetch the results
            Ext.Ajax.request({
                url:        me.url,
                timeout:    me.timeout,
                jsonData:   params,
                callback:   me.processRemoteResults,
                scope:      me
            });
        }
    }
});

