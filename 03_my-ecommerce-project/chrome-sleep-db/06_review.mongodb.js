use("chrome-sleep-db");

// Clear existing data
db.review.deleteMany({});

// Insert mock data for Reviews collection
db.review.insertMany([
{
        "_id": ObjectId("65f500000000000000000001"),
        "booking_id": ObjectId("65f300000000000000000001"),
        "rating": 5,
        "comment": "โปรแกรมช่วยให้ปรับเวลานอนได้ดีขึ้น"
  },
  {
        "_id": ObjectId("65f500000000000000000002"),
        "booking_id": ObjectId("65f300000000000000000002"),
        "rating": 5,
        "comment": "โฮสต์บริการดี"
  },
  {
        "_id": ObjectId("65f500000000000000000003"),
        "booking_id": ObjectId("65f300000000000000000003"),
        "rating": 5,
        "comment": "รักโฮสต์"
  }
]);

// Find all users
db.review.find({});