use("chrome-sleep-db");

// Clear existing data
db.plans.deleteMany({});

// Insert mock data for Plans collection
db.plans.insertMany([
{
        "_id": ObjectId("65f100000000000000000001"),
        "plan_name": "monthly",
        "duration": 30,
        "price": 1999
  },
  {
        "_id": ObjectId("65f100000000000000000002"),
        "plan_name": "weekly",             
        "duration": 7,
        "price": 599
  },
  {
        "_id": ObjectId("65f100000000000000000003"),
        "plan_name": "daily",
        "duration": 1,
        "price": 99
  }
]);

// Find all users
db.plans.find({});