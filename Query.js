
// 1. Create a new collection.

db.createCollection("newCollectionName");



// 2. Removes a collection from the database.

db.myCollectionName.drop();


// 3. Inserts a single document into a collection.

db.myCollectionName.insertOne({
    name: "John Doe",
    age: 30
  });

  

// 4. Delete/remove a single document from the collection.

db.myCollectionName.deleteOne({ name: "John Doe" });

