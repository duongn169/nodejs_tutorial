
import express from 'express';
import initWebRoute from './route/web'
import configViewEngine from './configs/viewEngine'
require('dotenv').config();

const app = express()
const port =  process.env.PORT || 8080;

// set up view engine
configViewEngine(app);

// init web route
initWebRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})