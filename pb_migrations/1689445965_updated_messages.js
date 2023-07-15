migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1wt3dslr3zd4tt")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
