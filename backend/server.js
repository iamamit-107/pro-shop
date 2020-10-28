const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/products", productRoute);

// Custom error handler middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`server is running in ${process.env.NODE_ENV} port ${PORT}`)
);
