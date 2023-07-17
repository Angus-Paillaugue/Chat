migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("05jjl4x3ymzu4pa");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "05jjl4x3ymzu4pa",
    "created": "2023-07-17 07:08:28.133Z",
    "updated": "2023-07-17 07:08:28.133Z",
    "name": "files",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zaftyncj",
        "name": "file",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "rfe3lr5b",
        "name": "message",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "w1wt3dslr3zd4tt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
