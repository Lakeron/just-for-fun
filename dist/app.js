"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const _index_1 = require("./routes/_index");
// App
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
var router = new _index_1.BaseRouter(app);
router.init();
// DB
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    console.log("Connected to DB\n");
    console.log(("Visit http://localhost:%d/api-docs to test API."), app.get("port"));
})).catch(error => console.log("TypeORM connection error: ", error));
module.exports = app;
//# sourceMappingURL=app.js.map