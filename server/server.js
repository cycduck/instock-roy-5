const express = require('express');
const app = express();
const middleware = require('./middleware/middleware');
const cors = require('cors');
const route = require('./route/route');


// Middleware
app.use('/', middleware);

// Routes
app.use('/', route);


app.listen(8080, ()=> {
  console.log('if you see this message, it is working')
})

// K: please add routes to route.js
// K: please add functions (request, response) => {} to endpoints.js