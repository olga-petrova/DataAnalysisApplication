package com.company.test.test.test.taxp.generated;

import com.company.test.test.test.taxp.Taxp;
import com.company.test.test.test.taxp.TaxpImpl;
import com.speedment.Speedment;
import com.speedment.exception.SpeedmentException;
import com.speedment.field.FieldIdentifier;
import com.speedment.field.trait.FieldTrait;
import com.speedment.plugin.extspeeder.runtime.manager.AbstractExtSpeederSqlManager;
import com.speedment.util.tuple.Tuple1;
import com.speedment.util.tuple.Tuples;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.stream.Stream;
import javax.annotation.Generated;
import static com.speedment.internal.util.sql.ResultSetUtil.*;

/**
 * The generated base manager implementation representing an entity (for
 * example, a row) in the Table test.test.test.taxp.
 * <p>
 * This file has been automatically generated by Ext Speeder. Any changes
 * made to it will be overwritten.
 * 
 * @author Ext Speeder
 */
@Generated("Ext Speeder")
public abstract class GeneratedTaxpManagerImpl extends AbstractExtSpeederSqlManager<Taxp> implements GeneratedTaxpManager {
    
    private final static Tuple1<Class<Integer>> PRIMARY_KEY_CLASSES = Tuples.of(Integer.class);
    
    protected GeneratedTaxpManagerImpl(Speedment speedment) {
        super(speedment);
        setEntityMapper(this::newEntityFrom);
    }
    
    protected Taxp newEntityFrom(ResultSet resultSet) throws SQLException, SpeedmentException {
        final Taxp entity = newEmptyEntity();
        try {
            entity.setId(resultSet.getInt(1));
            entity.setDescription(resultSet.getString(2));
        }
        catch (SQLException sqle) {
            throw new SpeedmentException(sqle);
        }
        return entity;
    }
    
    @Override
    public Taxp newEmptyEntity() {
        return new TaxpImpl() {
            @Override
            protected Speedment speedment() {
                return speedment;
            }
        };
    }
    
    @Override
    public Object get(Taxp entity, FieldIdentifier<Taxp> identifier) {
        switch ((Taxp.Identifier) identifier) {
            case ID : return entity.getId();
            case DESCRIPTION : return entity.getDescription().orElse(null);
            default : throw new IllegalArgumentException("Unknown identifier '" + identifier + "'.");
        }
    }
    
    @Override
    public void set(Taxp entity, FieldIdentifier<Taxp> identifier, Object value) {
        switch ((Taxp.Identifier) identifier) {
            case ID : entity.setId((Integer) value); break;
            case DESCRIPTION : entity.setDescription((String) value); break;
            default : throw new IllegalArgumentException("Unknown identifier '" + identifier + "'.");
        }
    }
    
    @Override
    public Stream<FieldTrait> fields() {
        return Stream.of(
            Taxp.ID,
            Taxp.DESCRIPTION
        );
    }
    
    @Override
    public Stream<FieldTrait> primaryKeyFields() {
        return Stream.of(
            Taxp.ID
        );
    }
    
    @Override
    public Tuple1<Class<Integer>> getPrimaryKeyClasses() {
        return PRIMARY_KEY_CLASSES;
    }
    
    @Override
    public Taxp newCopyOf(Taxp source) {
        final Taxp copy = new TaxpImpl() {
            @Override
            protected final Speedment speedment() {
                return speedment;
            }
        };
        
        copy.setId(source.getId());
        source.getDescription().ifPresent(copy::setDescription);
        
        return copy;
    }
}