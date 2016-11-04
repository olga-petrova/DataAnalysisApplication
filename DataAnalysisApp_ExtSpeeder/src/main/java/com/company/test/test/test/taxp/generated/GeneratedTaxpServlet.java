package com.company.test.test.test.taxp.generated;

import com.company.test.test.test.taxp.Taxp;
import com.speedment.plugin.extspeeder.runtime.FieldMapper;
import com.speedment.plugin.extspeeder.runtime.servlet.ExtSpeederHttpServlet;
import javax.annotation.Generated;
import static com.speedment.encoder.JsonEncoder.jsonValue;

/**
 * The generated servlet representing an entity (for example, a row) in the
 * Table test.test.test.taxp.
 * <p>
 * This file has been automatically generated by Ext Speeder. Any changes
 * made to it will be overwritten.
 * 
 * @author Ext Speeder
 */
@Generated("Ext Speeder")
public class GeneratedTaxpServlet extends ExtSpeederHttpServlet<Taxp> {
    
    private final static long serialVersionUID = -1268000080;
    public static FieldMapper<Taxp> FIELD_MAPPER = columnName -> {
            switch (columnName) {
                case "id" : return Taxp.ID;
                case "description" : return Taxp.DESCRIPTION;
                default : return null;
            }
    };
    
    @Override
    public Class<Taxp> entityClass() {
        return Taxp.class;
    }
    
    @Override
    public FieldMapper<Taxp> fieldMapper() {
        return FIELD_MAPPER;
    }
    
    @Override
    public String toJson(Taxp entity) {
        return entity == null ? "null" : new StringBuilder()
            .append('{')
            .append("\"id\":").append(jsonValue(entity.getId())).append(", ")
            .append("\"description\":").append(jsonValue(entity.getDescription()))
            .append('}')
        .toString();
    }
    
    @Override
    public String getServletInfo() {
        return "Servlet for the taxp table in the test schema.";
    }
}