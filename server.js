// Server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User"); // Định nghĩa mô hình User

const app = express();
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(
  "mongodb+srv://mint:4tjz68hdOdNuFGxb@mintcluster.0mkfceu.mongodb.net/?retryWrites=true&w=majority",
);

// Route đăng ký
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send("User created");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route đăng nhập
app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    // Tạo JWT
    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "24h",
    });
    res.json({ token });
  } else {
    res.status(400).send("Email or password is wrong");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
