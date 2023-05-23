
import express from 'express';
import initWebRoute from './route/web'
import configViewEngine from './configs/viewEngine'
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express()
const port =  process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set up view engine
configViewEngine(app);

// init web route
initWebRoute(app);

initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})