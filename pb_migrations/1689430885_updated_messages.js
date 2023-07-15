migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  // remove
  collection.schema.removeField("knmgnwzc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zijtku2g",
    "name": "to",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "knmgnwzc",
    "name": "to",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zijtku2g")

  return dao.saveCollection(collection)
})
