use("chrome-sleep-db");

// Clear existing data
db.user.deleteMany({});

// Insert mock data for Users collection
db.user.insertMany([
  {
        "_id": ObjectId("65f000000000000000000001"),
        "name": "namtan",
        "email": "namtan@example.com",
        "password": "namtan0101",
        "bedtime": "22:00",
        "waketime": "07:00"
  },
  {
        "_id": ObjectId("65f000000000000000000002"),
        "name": "love",
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
  },
  {
        "_id": ObjectId("65f000000000000000000004"),
        "name": "emi",
        "email": "emi@example.com",
        "password": "emi0104",
        "bedtime": "23:30",
        "waketime": "06:30"
  },
  {
        "_id": ObjectId("65f000000000000000000005"),
        "name": "view",
        "email": "view@example.com",
        "password": "view0105",
        "bedtime": "22:30",
        "waketime": "06:00"
  },
  {
        "_id": ObjectId("65f000000000000000000006"),
        "name": "nicky",
        "email": "nicky@example.com",
        "password": "nicky0106",
        "bedtime": "00:00",
        "waketime": "07:30"
  },
  {
        "_id": ObjectId("65f000000000000000000007"),
        "name": "dear",
        "email": "dear@example.com",
        "password": "dear0107",
        "bedtime": "21:30",
        "waketime": "05:30"
  },
  {
        "_id": ObjectId("65f000000000000000000008"),
        "name": "sita",
        "email": "sita@example.com",
        "password": "sita0108",
        "bedtime": "23:30",
        "waketime": "08:30"
  },
  {
        "_id": ObjectId("65f000000000000000000009"),
        "name": "karina",
        "email": "karina@example.com",
        "password": "karina0109",
        "bedtime": "22:00",
        "waketime": "06:00"
  },
  {
        "_id": ObjectId("65f000000000000000000010"),
        "name": "ningning",
        "email": "ningning@example.com",
        "password": "ningning0110",
        "bedtime": "00:30",
        "waketime": "08:00"
  }
]);

// Find all users
db.user.find({});