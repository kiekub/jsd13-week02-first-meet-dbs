use("chrome-sleep-db");

// Clear existing data
db.host.deleteMany({});

// Insert mock data for Hosts collection
db.host.insertMany([
  {
        "_id": ObjectId("65f200000000000000000001"),
        "name": "Film",
        "email": "film@example.com",
        "password": "666-0101",
        "gender": "เคะ",
        "personality":"Friendly",
        "rating": 5.0,
        "host_status": "active"
  },
  {
        "_id": ObjectId("65f200000000000000000002"),
        "name": "Milk",
        "email": "milk@example.com",
        "password": "666-0102",
        "gender": "เมะ",
        "personality": "Cool",
        "rating": 5.0,
        "host_status": "busy"
  },
  {
        "_id": ObjectId("65f300000000000000000003"),
        "name": "Mint",
        "email": "mint@example.com",
        "password": "666-0103",
        "gender": "เคะ",
        "personality": "Kind",
        "rating": 5.0,
        "host_status": "active"
  }
]);

// Find all hosts
db.host.find({});