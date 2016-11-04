package com.company.test.test.test.taxp;

import com.company.test.test.test.taxp.generated.GeneratedTaxpSerializerImpl;
import com.speedment.manager.Manager;

/**
 * A {@link org.mapdb.Serializer} class for table {@link
 * com.speedment.config.db.Table} named taxp. representing an entity (for
 * example, a row) in the Table test.test.test.taxp.
 * <p>
 * This file is safe to edit. It will not be overwritten by the code
 * generator.
 * 
 * @author company
 */
public final class TaxpSerializerImpl extends GeneratedTaxpSerializerImpl {
    
    private final static long serialVersionUID = GeneratedTaxpSerializerImpl.serialVersionUID + 1;
    
    public TaxpSerializerImpl(final Manager<Taxp> manager) {
        super(manager);
    }
}