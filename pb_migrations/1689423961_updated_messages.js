migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  collection.createRule = null

  return dao.saveCollection(collection)
})
