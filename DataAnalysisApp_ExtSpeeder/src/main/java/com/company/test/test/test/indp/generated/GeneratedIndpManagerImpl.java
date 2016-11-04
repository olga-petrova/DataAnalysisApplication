package com.company.test.test.test.indp.generated;

import com.company.test.test.test.indp.Indp;
import com.company.test.test.test.indp.IndpImpl;
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
 * example, a row) in the Table test.test.test.indp.
 * <p>
 * This file has been automatically generated by Ext Speeder. Any changes
 * made to it will be overwritten.
 * 
 * @author Ext Speeder
 */
@Generated("Ext Speeder")
public abstract class GeneratedIndpManagerImpl extends AbstractExtSpeederSqlManager<Indp> implements GeneratedIndpManager {
    
    private final static Tuple1<Class<Integer>> PRIMARY_KEY_CLASSES = Tuples.of(Integer.class);
    
    protected GeneratedIndpManagerImpl(Speedment speedment) {
        super(speedment);
        setEntityMapper(this::newEntityFrom);
    }
    
    protected Indp newEntityFrom(ResultSet resultSet) throws SQLException, SpeedmentException {
        final Indp entity = newEmptyEntity();
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
    public Indp newEmptyEntity() {
        return new IndpImpl() {
            @Override
            protected Speedment speedment() {
                return speedment;
            }
        };
    }
    
    @Override
    public Object get(Indp entity, FieldIdentifier<Indp> identifier) {
        switch ((Indp.Identifier) identifier) {
            case ID : return entity.getId();
            case DESCRIPTION : return entity.getDescription().orElse(null);
            default : throw new IllegalArgumentException("Unknown identifier '" + identifier + "'.");
        }
    }
    
    @Override
    public void set(Indp entity, FieldIdentifier<Indp> identifier, Object value) {
        switch ((Indp.Identifier) identifier) {
            case ID : entity.setId((Integer) value); break;
            case DESCRIPTION : entity.setDescription((String) value); break;
            default : throw new IllegalArgumentException("Unknown identifier '" + identifier + "'.");
        }
    }
    
    @Override
    public Stream<FieldTrait> fields() {
        return Stream.of(
            Indp.ID,
            Indp.DESCRIPTION
        );
    }
    
    @Override
    public Stream<FieldTrait> primaryKeyFields() {
        return Stream.of(
            Indp.ID
        );
    }
    
    @Override
    public Tuple1<Class<Integer>> getPrimaryKeyClasses() {
        return PRIMARY_KEY_CLASSES;
    }
    
    @Override
    public Indp newCopyOf(Indp source) {
        final Indp copy = new IndpImpl() {
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