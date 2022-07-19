import dotenv from 'dotenv'
import express from "express";
import { router } from './route/router.js';
import path from 'path'
import cors from 'cors';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';
import {dbData} from './database/connection.js'

dotenv.config()

dbData();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || process.env.API_PORT;
var corsOptions = {
  origin:  "https://cg-karl-fashion-react.herokuapp.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, variousSmartTVs) choke on 204
  credentials:true
}
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use('/items', router);
app.set('view engine', 'ejs');
app.use('/cosmetic', express.static(path.join(__dirname, 'public/assets/css')))



app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});
