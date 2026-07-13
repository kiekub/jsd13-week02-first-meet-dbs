use("chrome-sleep-db");

// Clear existing data
db.booking.deleteMany({});

// Insert mock data for Plans collection
db.booking.insertMany([
{
        "_id": ObjectId("65f130000000000000000001"),
        "user_id": ObjectId("65f000000000000000000001"),
        "plan_id": ObjectId("65f100000000000000000001"),
        "host_id": ObjectId("65f200000000000000000001"),
        "schedule": {
            "start_date": "2026-03-01",
            "end_date": "2026-03-30",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY001",
            "payment_method": "credit_card",
            "amount": 1999,
         "payment_status": "paid",
             "paid_at": "2026-02-25T10:00:00Z"
            },
        "booking_status": "success",
        "booking_date": "2026-02-25T11:00:00Z"
  },
  {
        "_id": ObjectId("65f300000000000000000002"),
        "user_id": ObjectId("65f000000000000000000002"),
        "plan_id": ObjectId("65f100000000000000000002"),
        "host_id": ObjectId("65f200000000000000000002"),
        "schedule": {
            "start_date": "2026-03-01",
            "end_date": "2026-03-07",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY002",
            "payment_method": "paypal",
            "amount": 599,
            "payment_status": "paid",
            "paid_at": "2026-02-25T15:00:00Z"
            },
    "booking_status": "success",
    "booking_date": "2026-02-26T19:00:00Z"
  },
  {
        "_id": ObjectId("65f300000000000000000003"),
        "user_id": ObjectId("65f000000000000000000003"),
        "plan_id": ObjectId("65f100000000000000000003"),
        "host_id": ObjectId("65f200000000000000000003"),
        "schedule": {
        "start_date": "2026-03-02",
        "end_date": "2026-03-03",
        "frequency": "daily"
        },
    "payment": {
        "payment_id": "PAY003",
        "payment_method": "bank_transfer",
        "amount": 99,
        "payment_status": "paid",
        "paid_at": "2026-03-01T16:00:00Z"
        },
    "booking_status": "success",
    "booking_date": "2026-03-01T17:00:00Z"
  },
  {
        "_id": ObjectId("65f130000000000000000004"),
        "user_id": ObjectId("65f000000000000000000004"),
        "plan_id": ObjectId("65f100000000000000000001"),
        "host_id": ObjectId("65f200000000000000000004"),
        "schedule": {
            "start_date": "2026-04-01",
            "end_date": "2026-04-30",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY004",
            "payment_method": "credit_card",
            "amount": 1999,
            "payment_status": "paid",
            "paid_at": "2026-03-28T09:00:00Z"
            },
        "booking_status": "success",
        "booking_date": "2026-03-28T10:00:00Z"
  },
  {
        "_id": ObjectId("65f130000000000000000005"),
        "user_id": ObjectId("65f000000000000000000005"),
        "plan_id": ObjectId("65f100000000000000000002"),
        "host_id": ObjectId("65f200000000000000000005"),
        "schedule": {
            "start_date": "2026-04-01",
            "end_date": "2026-04-07",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY005",
            "payment_method": "paypal",
            "amount": 599,
            "payment_status": "paid",
            "paid_at": "2026-03-29T14:00:00Z"
            },
        "booking_status": "success",
        "booking_date": "2026-03-29T15:00:00Z"
  },
  {
        "_id": ObjectId("65f130000000000000000006"),
        "user_id": ObjectId("65f000000000000000000006"),
        "plan_id": ObjectId("65f100000000000000000003"),
        "host_id": ObjectId("65f200000000000000000006"),
        "schedule": {
            "start_date": "2026-04-01",
            "end_date": "2026-04-01",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY006",
            "payment_method": "credit_card",
            "amount": 99,
            "payment_status": "paid",
            "paid_at": "2026-03-30T08:00:00Z"
            },
        "booking_status": "success",
        "booking_date": "2026-03-30T09:00:00Z"
  },
  {
        "_id": ObjectId("65f130000000000000000007"),
        "user_id": ObjectId("65f000000000000000000007"),
        "plan_id": ObjectId("65f100000000000000000001"),
        "host_id": ObjectId("65f200000000000000000007"),
        "schedule": {
            "start_date": "2026-04-01",
            "end_date": "2026-04-30",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY007",
            "payment_method": "bank_transfer",
            "amount": 1999,
            "payment_status": "paid",
            "paid_at": "2026-03-30T11:00:00Z"
            },
        "booking_status": "success",
        "booking_date": "2026-03-30T12:00:00Z"
  },
  {
        "_id": ObjectId("65f130000000000000000008"),
        "user_id": ObjectId("65f000000000000000000008"),
        "plan_id": ObjectId("65f100000000000000000002"),
        "host_id": ObjectId("65f200000000000000000008"),
        "schedule": {
            "start_date": "2026-04-01",
            "end_date": "2026-04-07",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY008",
            "payment_method": "credit_card",
            "amount": 599,
            "payment_status": "pending",
            "paid_at": null
            },
        "booking_status": "pending",
        "booking_date": "2026-04-01T08:00:00Z"
  },
  {
        "_id": ObjectId("65f130000000000000000009"),
        "user_id": ObjectId("65f000000000000000000009"),
        "plan_id": ObjectId("65f100000000000000000003"),
        "host_id": ObjectId("65f200000000000000000009"),
        "schedule": {
            "start_date": "2026-04-02",
            "end_date": "2026-04-02",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY009",
            "payment_method": "paypal",
            "amount": 99,
            "payment_status": "paid",
            "paid_at": "2026-04-01T10:00:00Z"
            },
        "booking_status": "success",
        "booking_date": "2026-04-01T11:00:00Z"
  },
  {
        "_id": ObjectId("65f130000000000000000010"),
        "user_id": ObjectId("65f000000000000000000010"),
        "plan_id": ObjectId("65f100000000000000000001"),
        "host_id": ObjectId("65f200000000000000000010"),
        "schedule": {
            "start_date": "2026-04-01",
            "end_date": "2026-04-30",
            "frequency": "daily"
            },
        "payment": {
            "payment_id": "PAY010",
            "payment_method": "credit_card",
            "amount": 1999,
            "payment_status": "paid",
            "paid_at": "2026-04-01T15:00:00Z"
            },
        "booking_status": "success",
        "booking_date": "2026-04-01T16:00:00Z"
  }
]);

// Find all users
db.booking.find({});