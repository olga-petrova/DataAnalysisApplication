package com.company.test.test.test.naicsp.generated;

import com.company.test.test.test.naicsp.Naicsp;
import com.speedment.Entity;
import com.speedment.config.db.mapper.identity.StringIdentityMapper;
import com.speedment.field.FieldIdentifier;
import com.speedment.field.StringField;
import com.speedment.internal.core.field.StringFieldImpl;
import java.util.Optional;
import javax.annotation.Generated;

/**
 * The generated base interface representing an entity (for example, a row)
 * in the Table test.test.test.naicsp.
 * <p>
 * This file has been automatically generated by Ext Speeder. Any changes
 * made to it will be overwritten.
 * 
 * @author Ext Speeder
 */
@Generated("Ext Speeder")
public interface GeneratedNaicsp extends Entity<Naicsp> {
    
    /**
     * This Field corresponds to the {@link Naicsp} field that can be obtained
     * using the {@link Naicsp#getId()} method.
     */
    final StringField<Naicsp, String> ID = new StringFieldImpl<>(Identifier.ID, Naicsp::getId, Naicsp::setId, new StringIdentityMapper(), true);
    /**
     * This Field corresponds to the {@link Naicsp} field that can be obtained
     * using the {@link Naicsp#getDescription()} method.
     */
    final StringField<Naicsp, String> DESCRIPTION = new StringFieldImpl<>(Identifier.DESCRIPTION, o -> o.getDescription().orElse(null), Naicsp::setDescription, new StringIdentityMapper(), false);
    
    /**
     * Returns the id of this Naicsp. The id field corresponds to the database
     * column test.test.naicsp.id.
     * 
     * @return the id of this Naicsp
     */
    String getId();
    
    /**
     * Returns the description of this Naicsp. The description field corresponds
     * to the database column test.test.naicsp.description.
     * 
     * @return the description of this Naicsp
     */
    Optional<String> getDescription();
    
    /**
     * Sets the id of this Naicsp. The id field corresponds to the database
     * column test.test.naicsp.id.
     * 
     * @param id to set of this Naicsp
     * @return this Naicsp instance
     */
    Naicsp setId(String id);
    
    /**
     * Sets the description of this Naicsp. The description field corresponds to
     * the database column test.test.naicsp.description.
     * 
     * @param description to set of this Naicsp
     * @return this Naicsp instance
     */
    Naicsp setDescription(String description);
    
    enum Identifier implements FieldIdentifier<Naicsp> {
        
        ID ("id"),
        DESCRIPTION ("description");
        
        private final String columnName;
        
        Identifier(String columnName) {
            this.columnName = columnName;
        }
        
        @Override
        public String dbmsName() {
            return "test";
        }
        
        @Override
        public String schemaName() {
            return "test";
        }
        
        @Override
        public String tableName() {
            return "naicsp";
        }
        
        @Override
        public String columnName() {
            return this.columnName;
        }
    }
}