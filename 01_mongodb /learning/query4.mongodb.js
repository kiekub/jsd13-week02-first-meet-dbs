use("sample_mflix");

//db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();

//db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count();

db.movies.find({ plot: { $regex: "street.$", $options: "i" } })

//อย่าลืมใส่ $options: "i" เพื่อให้ค้นหาไม่สนใจตัวพิมพ์ใหญ่/เล็ก
//เช็คชื่อ fields ให้ดี case sensitive

