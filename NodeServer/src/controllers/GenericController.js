export async function getAll(Model) {
  // const Model = GetMongoModel(schemaName, schema);
  return await Model.find({});
}

export async function getById(Model ,id) {
  // const Model = GetMongoModel(schemaName, schema);
  return await Model.findById(id);
}

export async function save(Model, body) {
  // const Model = GetMongoModel(schemaName, schema);
  const modelObj = new Model(body);
  return await modelObj.save();
}

export async function deleteById(Model, id) {
  // const Model = GetMongoModel(schemaName, schema);
  return await Model.deleteOne({ _id: id });
}

export async function updateById(Model, id, updateData){

  return await Model.findByIdAndUpdate(id, updateData, {new: true})
}