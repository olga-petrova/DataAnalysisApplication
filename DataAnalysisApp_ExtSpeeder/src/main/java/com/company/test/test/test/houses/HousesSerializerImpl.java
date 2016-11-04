package com.company.test.test.test.houses;

import com.company.test.test.test.houses.generated.GeneratedHousesSerializerImpl;
import com.speedment.manager.Manager;

/**
 * A {@link org.mapdb.Serializer} class for table {@link
 * com.speedment.config.db.Table} named houses. representing an entity (for
 * example, a row) in the Table test.test.test.houses.
 * <p>
 * This file is safe to edit. It will not be overwritten by the code
 * generator.
 * 
 * @author company
 */
public final class HousesSerializerImpl extends GeneratedHousesSerializerImpl {
    
    private final static long serialVersionUID = GeneratedHousesSerializerImpl.serialVersionUID + 1;
    
    public HousesSerializerImpl(final Manager<Houses> manager) {
        super(manager);
    }
}