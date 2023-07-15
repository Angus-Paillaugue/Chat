migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "knmgnwzc",
    "name": "channel",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  // remove
  collection.schema.removeField("knmgnwzc")

  return dao.saveCollection(collection)
})
