import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 這裡換成你的 Gmail 與「應用程式密碼」
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "你的Email@gmail.com",       // 你的 Gmail
    pass: "qyir qqoc jkzo kgfg",            // 注意不是登入密碼，而是 Gmail 的應用程式專用密碼
  },
});

// 接收留言並寄到你的信箱
app.post("/send-email", async (req, res) => {
  const { message } = req.body;

  try {
    await transporter.sendMail({
      from: "你的Email@gmail.com",
      to: "ok037352085@gmail.com",  // 收件人就是你自己
      subject: "留言板新訊息",
      text: message,
    });

    res.json({ msg: "留言已成功寄送到信箱！" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "寄送失敗" });
  }
});

app.listen(3000, () => {
  console.log("伺服器運行在 http://localhost:3000");
});

