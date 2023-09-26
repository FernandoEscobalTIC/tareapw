import express from "express";
import router from "./src/routes/router.js";
import "dotenv/config";
import utils from "./src/utils.js";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

//comprueba variables de entorno
utils.validatePort();
utils.validateSecretKey();
utils.validateDatabaseUrl();

const port = utils.validatePort();
app.listen(port, () => console.log(`server running on port ${port}`));
app.use("/", router);