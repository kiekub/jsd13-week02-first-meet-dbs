use("chrome-sleep-db");

// Clear existing data
db.session.deleteMany({});

// Insert mock data for Sessions collection
db.session.insertMany([
{
        "_id": ObjectId("65f400000000000000000001"),
        "booking_id": ObjectId("65f400000000000000000001"),
        "session_date": "2026-03-02T23:00:00Z",
        "bedtime_status": "completed",    
        "wake_status": "completed",
        "confirmation_status": "confirmed",
        "sleep_duration": 9
  },
  {
        "_id": ObjectId("65f400000000000000000002"),
        "booking_id": ObjectId("65f400000000000000000002"),
        "session_date": "2026-03-02T23:00:00Z",
        "bedtime_status": "completed",    
        "wake_status": "completed",
        "confirmation_status": "confirmed",
        "sleep_duration": 9
  },
  {
        "_id": ObjectId("65f100000000000000000003"),
        "booking_id": ObjectId("65f400000000000000000003"),
        "session_date": "2026-03-03T21:00:00Z",
        "bedtime_status": "completed",    
        "wake_status": "completed",
        "confirmation_status": "confirmed",
        "sleep_duration": 9
  },
  {
        "_id": ObjectId("65f400000000000000000004"),
        "booking_id": ObjectId("65f130000000000000000004"),
        "session_date": "2026-04-01T23:30:00Z",
        "bedtime_status": "completed",    
        "wake_status": "completed",
        "confirmation_status": "confirmed",
        "sleep_duration": 7
  },
  {
        "_id": ObjectId("65f400000000000000000005"),
        "booking_id": ObjectId("65f130000000000000000005"),
        "session_date": "2026-04-01T22:30:00Z",
        "bedtime_status": "completed",    
        "wake_status": "missed",
        "confirmation_status": "pending",
        "sleep_duration": null
  },
  {
        "_id": ObjectId("65f400000000000000000006"),
        "booking_id": ObjectId("65f130000000000000000006"),
        "session_date": "2026-04-01T00:00:00Z",
        "bedtime_status": "missed",    
        "wake_status": "completed",
        "confirmation_status": "pending",
        "sleep_duration": 7
  },
  {
        "_id": ObjectId("65f400000000000000000007"),
        "booking_id": ObjectId("65f130000000000000000007"),
        "session_date": "2026-04-01T21:30:00Z",
        "bedtime_status": "completed",    
        "wake_status": "completed",
        "confirmation_status": "confirmed",
        "sleep_duration": 8
  },
  {
        "_id": ObjectId("65f400000000000000000008"),
        "booking_id": ObjectId("65f130000000000000000008"),
        "session_date": "2026-04-01T23:30:00Z",
        "bedtime_status": "completed",    
        "wake_status": "completed",
        "confirmation_status": "pending",
        "sleep_duration": 9
  },
  {
        "_id": ObjectId("65f400000000000000000009"),
        "booking_id": ObjectId("65f130000000000000000009"),
        "session_date": "2026-04-02T22:00:00Z",
        "bedtime_status": "completed",    
        "wake_status": "completed",
        "confirmation_status": "confirmed",
        "sleep_duration": 8
  },
  {
        "_id": ObjectId("65f400000000000000000010"),
        "booking_id": ObjectId("65f130000000000000000010"),
        "session_date": "2026-04-01T00:30:00Z",
        "bedtime_status": "missed",    
        "wake_status": "missed",
        "confirmation_status": "cancelled",
        "sleep_duration": null
  }
]);

// Find all users
db.session.find({});