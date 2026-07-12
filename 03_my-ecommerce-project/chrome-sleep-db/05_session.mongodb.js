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
  }
]);

// Find all users
db.session.find({});