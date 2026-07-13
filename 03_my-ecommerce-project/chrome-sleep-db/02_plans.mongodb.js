use("chrome-sleep-db");

// Clear existing data
db.plans.deleteMany({});

// Insert mock data for Plans collection
db.plans.insertMany([
{
        "_id": ObjectId("65f100000000000000000001"),
        "plan_name": "monthly",
        "duration": 30,
        "promotional_offer": "Get 80% off for the first subscription!",
        "price": 1999
  },
  {
        "_id": ObjectId("65f100000000000000000002"),
        "plan_name": "weekly",             
        "duration": 7,
        "promotional_offer": "Get 50% off for the first subscription!",
        "price": 599
  },
  {
        "_id": ObjectId("65f100000000000000000003"),
        "plan_name": "daily",
        "duration": 1,
        "promotional_offer": "Free 2-Day Trial for New Members",
        "price": 99
  }
]);

// Find all users
db.plans.find({});