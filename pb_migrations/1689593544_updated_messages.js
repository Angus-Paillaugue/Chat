migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xobivjam",
    "name": "seen",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  // remove
  collection.schema.removeField("xobivjam")

  return dao.saveCollection(collection)
})
