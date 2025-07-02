const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbconnection');
const taskRoutes = require('./routes/taskrouter');

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running port ${PORT}`));
