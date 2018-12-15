const express = require('express');
// process json data easily
const bodyParser = require('body-parser');
// used for clients to access server
const cors = require('cors');
// for printing out logs
const morgan = require('morgan');

// building express server
const app = express();

// enabling packages
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());


app.listen(process.env.PORT || 8081);


app.post('/register', (req, res) => {
  res.send({
    message: 'Your user was registered!!',
  });
});
