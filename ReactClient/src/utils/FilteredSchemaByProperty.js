function FilteredSchemaByProperty(schema, property) {
    return schema.filter(e => property in e);
}

export default FilteredSchemaByProperty