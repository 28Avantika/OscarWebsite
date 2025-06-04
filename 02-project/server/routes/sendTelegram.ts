// server/routes/sendTelegram.ts
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, message } = req.body;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: "Missing Telegram credentials." });
  }

  const text = `🚨 *New Query from ContactForm of Oscar's Website*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📝 *Message:* ${message}\n🕒 Time: ${new Date().toLocaleString()}`;

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    const data = await telegramRes.json();
    if (!data.ok) throw new Error(data.description);

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Telegram send error:", err);
    return res.status(500).json({ error: err.message });
  }
});

export default router;
