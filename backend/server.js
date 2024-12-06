const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = 3000;

const authRoute = require('./routes/authenticate')

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/authenticate', authRoute);

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })