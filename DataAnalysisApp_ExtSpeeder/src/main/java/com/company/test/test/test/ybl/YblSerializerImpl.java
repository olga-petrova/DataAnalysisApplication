package com.company.test.test.test.ybl;

import com.company.test.test.test.ybl.generated.GeneratedYblSerializerImpl;
import com.speedment.manager.Manager;

/**
 * A {@link org.mapdb.Serializer} class for table {@link
 * com.speedment.config.db.Table} named ybl. representing an entity (for
 * example, a row) in the Table test.test.test.ybl.
 * <p>
 * This file is safe to edit. It will not be overwritten by the code
 * generator.
 * 
 * @author company
 */
public final class YblSerializerImpl extends GeneratedYblSerializerImpl {
    
    private final static long serialVersionUID = GeneratedYblSerializerImpl.serialVersionUID + 1;
    
    public YblSerializerImpl(final Manager<Ybl> manager) {
        super(manager);
    }
}