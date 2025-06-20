// server.js
const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./src/routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});