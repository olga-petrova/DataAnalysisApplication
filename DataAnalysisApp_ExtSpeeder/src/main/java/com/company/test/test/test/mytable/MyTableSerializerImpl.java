package com.company.test.test.test.mytable;

import com.company.test.test.test.mytable.generated.GeneratedMyTableSerializerImpl;
import com.speedment.manager.Manager;

/**
 * A {@link org.mapdb.Serializer} class for table {@link
 * com.speedment.config.db.Table} named myTable. representing an entity (for
 * example, a row) in the Table test.test.test.myTable.
 * <p>
 * This file is safe to edit. It will not be overwritten by the code
 * generator.
 * 
 * @author company
 */
public final class MyTableSerializerImpl extends GeneratedMyTableSerializerImpl {
    
    private final static long serialVersionUID = GeneratedMyTableSerializerImpl.serialVersionUID + 1;
    
    public MyTableSerializerImpl(final Manager<MyTable> manager) {
        super(manager);
    }
}