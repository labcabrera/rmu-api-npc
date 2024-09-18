const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3004;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/rmu-npc';

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to ' + MONGO_URI))
  .catch((err) => console.log('Error connecting to ' + MONGO_URI, err));

const npcsRouter = require('./routes/npc');
app.use('/v1/npc', npcsRouter);

app.get('/', (req, res) => {
  res.send('TODO');
});

app.listen(PORT, () => {
  console.log(`API started on ${PORT}`);
});