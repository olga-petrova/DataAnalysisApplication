package com.company.test.test.test.people;

import com.company.test.test.test.people.generated.GeneratedPeopleSerializerImpl;
import com.speedment.manager.Manager;

/**
 * A {@link org.mapdb.Serializer} class for table {@link
 * com.speedment.config.db.Table} named people. representing an entity (for
 * example, a row) in the Table test.test.test.people.
 * <p>
 * This file is safe to edit. It will not be overwritten by the code
 * generator.
 * 
 * @author company
 */
public final class PeopleSerializerImpl extends GeneratedPeopleSerializerImpl {
    
    private final static long serialVersionUID = GeneratedPeopleSerializerImpl.serialVersionUID + 1;
    
    public PeopleSerializerImpl(final Manager<People> manager) {
        super(manager);
    }
}