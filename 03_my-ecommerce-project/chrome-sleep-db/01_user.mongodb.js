use("chrome-sleep-db");

// Clear existing data
db.user.deleteMany({});

// Insert mock data for Users collection
db.user.insertMany([
  {
        "_id": ObjectId("65f000000000000000000001"),
        "name": "Namtan",
        "email": "namtan@example.com",
        "password": "namtan0101",
        "bedtime": "22:00",
        "waketime": "07:00"
  },
  {
        "_id": ObjectId("65f000000000000000000002"),
        "name": "Love",
        "email": "love@example.com",
        "password": "love0102",
        "bedtime": "23:00",
        "waketime": "08:00"
  },
  {
        "_id": ObjectId("65f000000000000000000003"),
        "name": "earnearn",
        "email": "earnearn@example.com",
        "password": "earnearn0103",
        "bedtime": "21:00",
        "waketime": "06:00"
  }
]);

// Find all users
db.user.find({});