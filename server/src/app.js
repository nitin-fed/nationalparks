/** @format */

import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

const app = express();

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Express server is running");
});

app.get("/parks", async (req, res) => {
  try {
    const { stateCode, page = 1, pageSize = 10 } = req.query;

    const limit = Number(pageSize);
    const start = (Number(page) - 1) * limit;

    const response = await axios.get(`${process.env.NPS_BASE_URL}parks`, {
      params: {
        limit,
        start,
        stateCode,
      },
      headers: {
        "X-Api-Key": process.env.NPS_API_KEY,
      },
    });

    const total = Number(response.data.total);

    res.json({
      page: Number(page),
      pageSize: limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: response.data.data,
    });
  } catch (error) {
    console.error("Paging error:", error?.response?.data || error.message);

    res.status(500).json({
      message: "Failed to fetch parks",
    });
  }
});

export default app;
