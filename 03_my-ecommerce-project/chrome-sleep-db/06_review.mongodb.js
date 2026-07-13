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
  },
  {
        "_id": ObjectId("65f500000000000000000004"),
        "booking_id": ObjectId("65f130000000000000000004"),
        "rating": 5,
        "comment": "นอนหลับสบายมาก ขอบคุณโฮสต์"
  },
  {
        "_id": ObjectId("65f500000000000000000005"),
        "booking_id": ObjectId("65f130000000000000000005"),
        "rating": 4,
        "comment": "ดีแต่ตื่นสายไปหน่อย"
  },
  {
        "_id": ObjectId("65f500000000000000000006"),
        "booking_id": ObjectId("65f130000000000000000006"),
        "rating": 3,
        "comment": "โฮสต์น่ารัก แต่ระบบแจ้งเตือนช้า"
  },
  {
        "_id": ObjectId("65f500000000000000000007"),
        "booking_id": ObjectId("65f130000000000000000007"),
        "rating": 5,
        "comment": "ปรับเวลานอนได้ดีขึ้นมาก แนะนำเลย"
  },
  {
        "_id": ObjectId("65f500000000000000000008"),
        "booking_id": ObjectId("65f130000000000000000008"),
        "rating": 4,
        "comment": "โฮสต์บริการดี แต่ยังไม่ได้เริ่มจริงจัง"
  },
  {
        "_id": ObjectId("65f500000000000000000009"),
        "booking_id": ObjectId("65f130000000000000000009"),
        "rating": 5,
        "comment": "ชอบมาก จะต่ออีกเดือน"
  },
  {
        "_id": ObjectId("65f500000000000000000010"),
        "booking_id": ObjectId("65f130000000000000000010"),
        "rating": 4,
        "comment": "คุ้มค่า นอนหลับง่ายขึ้น"
  }
]);

// Find all users
db.review.find({});