package com.company.test.test.test.cow;

import com.company.test.test.test.cow.generated.GeneratedCowSerializerImpl;
import com.speedment.manager.Manager;

/**
 * A {@link org.mapdb.Serializer} class for table {@link
 * com.speedment.config.db.Table} named cow. representing an entity (for
 * example, a row) in the Table test.test.test.cow.
 * <p>
 * This file is safe to edit. It will not be overwritten by the code
 * generator.
 * 
 * @author company
 */
public final class CowSerializerImpl extends GeneratedCowSerializerImpl {
    
    private final static long serialVersionUID = GeneratedCowSerializerImpl.serialVersionUID + 1;
    
    public CowSerializerImpl(final Manager<Cow> manager) {
        super(manager);
    }
}