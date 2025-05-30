// server/src/index.ts
import express from "express";
import cors from "cors";
import { getDailyOrders } from "./controllers/orderCOntroller";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/orders/:date", async (req, res) => {
  const orders = await getDailyOrders(req.params.date);
  res.json(orders);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));