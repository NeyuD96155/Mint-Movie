require('dotenv').config(); // Thêm dòng này ở đầu file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoute = require('./routes/User');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', usersRoute);

// Kết nối MongoDB sử dụng biến môi trường
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Mongo!"))
  .catch((err) => console.error("Error connecting to Mongo", err));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
