const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
// ملاحظة انا اخترت منفذ 5000 لأنو من الشائع انو react بيعمل على منفذ 3000 في حين express بيعمل على منفذ 5000
// ولحتى ما يصير اي تداخل بعطي كل حد منفذ لكنها ليست قاعدة اساسية
// لكن بناء على ذلك انا بحاجة لوسيط هالوسيط ليسمح بانتقال البيانات من تردد 3000 الى تردد 5000 وهذا الوسيط هو ما يعرف بال cors
// الشي الي بيصير انو المتصفح بيرسل طلب للخادم بيسألو في اذا بيقدر يمرر عنه
// بكون عنا ما يعرف بال cors برد على الطلب تبع لمتصفح
// بناءا على رد ال cors بيسمح بمرور واستقبال البيانات
// npm install cors

app.use(cors());
// طيب خليني اوضح فكرة مهمة هون انا ليش بكتب بال server endpoints?
// app.get هو طريقة لأحدد نقطة النهاية بستنى منه استجابة
// لأحدد ال path تبع نقطة النهاية لما يوصل ال server طلب get
// الفكرة انو بيساعد في الوصول الى api خارجي بشكل اكتر امان
// يعني حاليا انا مو بحاجة اكتب ال api لا انا بس بكتب نهاية ال api
// http://localhost:5000/fakestoreapi.com/products لأ انا ما بكتب كل هاد
//  هلأ ال localhost منها وفيها
// اما ال api بكون كتابته endpoints يعني بس /api/products

app.get("/api/products", async (req, res) => {
  try {
    const data = await axios.get("https://fakestoreapi.com/products");
    res.json(data.data);
  } catch (error) {
    res.status(500).send("Error fetching products");
  }
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
