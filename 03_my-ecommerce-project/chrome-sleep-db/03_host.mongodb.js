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
  },
  {
        "_id": ObjectId("65f200000000000000000004"),
        "name": "Bonnie",
        "email": "bonnie@example.com",
        "password": "666-0104",
        "gender": "เมะ",
        "personality": "Gentle",
        "rating": 4.9,
        "host_status": "active"
  },
  {
        "_id": ObjectId("65f200000000000000000005"),
        "name": "Mim",
        "email": "mim@example.com",
        "password": "666-0105",
        "gender": "เคะ",
        "personality": "Playful",
        "rating": 4.8,
        "host_status": "busy"
  },
  {
        "_id": ObjectId("65f200000000000000000006"),
        "name": "Bear",
        "email": "bear@example.com",
        "password": "666-0106",
        "gender": "เมะ",
        "personality": "Calm",
        "rating": 5.0,
        "host_status": "active"
  },
  {
        "_id": ObjectId("65f200000000000000000007"),
        "name": "Game",
        "email": "game@example.com",
        "password": "666-0107",
        "gender": "เมะ",
        "personality": "Cheerful",
        "rating": 4.9,
        "host_status": "active"
  },
  {
        "_id": ObjectId("65f200000000000000000008"),
        "name": "Grace",
        "email": "grace@example.com",
        "password": "666-0108",
        "gender": "เมะ",
        "personality": "Mysterious",
        "rating": 5.0,
        "host_status": "busy"
  },
  {
        "_id": ObjectId("65f200000000000000000009"),
        "name": "Winter",
        "email": "winter@example.com",
        "password": "666-0109",
        "gender": "เคะ",
        "personality": "Warm",
        "rating": 5.0,
        "host_status": "active"
  },
  {
        "_id": ObjectId("65f200000000000000000010"),
        "name": "Gel",
        "email": "gel@example.com",
        "password": "666-0110",
        "gender": "เมะ",
        "personality": "Elegant",
        "rating": 5.0,
        "host_status": "active"
  }
]);

// Find all hosts
db.host.find({});