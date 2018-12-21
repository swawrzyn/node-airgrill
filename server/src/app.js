const express = require('express');
// process json data easily
const bodyParser = require('body-parser');
// used for clients to access server
const cors = require('cors');
// for printing out logs
const morgan = require('morgan');
// init models
const { sequelize } = require('./models');
// grab config file
const config = require('./config/config');
// building express server
const app = express();

// enabling packages
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}!`);
  });
