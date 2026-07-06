use("sample_mflix");

//db.theaters.find({ "location.address.state": "AL" }).count();

//db.theaters.find({ "location.address.city": "La Quinta" }).count()

db.theaters.findOne({ "location.address.city": "La Quinta" })

//อย่าลืมระบุ database ที่จะใช้ด้วย use("sample_mflix") ก่อนทำการ query