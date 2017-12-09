import * as express from 'express';
import * as bodyParser from "body-parser";
import "reflect-metadata";
import {createConnection, getManager} from "typeorm";
import {BaseRouter} from "./routes/_index";


// App
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// API Docs
const swaggerUi = require('swagger-ui-express');
var fs = require('fs');
var sweggerSpec = JSON.parse(fs.readFileSync('./dist/api-docs/swagger.json', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(sweggerSpec));


// Configuration
app.set("port", process.env.PORT || 3000);


// Start server
app.listen(app.get("port"), () => {
    console.log(("App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("Press CTRL-C to stop\n");
});


// Routes
var router = new BaseRouter(app);
router.init();


// DB
createConnection().then(async connection => {
    console.log("Connected to DB\n");

    console.log(("Visit http://localhost:%d/api-docs to test API."), app.get("port"));
}).catch(error => console.log("TypeORM connection error: ", error));


module.exports = app;