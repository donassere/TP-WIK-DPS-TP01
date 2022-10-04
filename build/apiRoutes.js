"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoutes = void 0;
const routes_config_1 = require("./routes.config");
let data = [];
class ApiRoutes extends routes_config_1.RoutesConfig {
    constructor(app) {
        super(app, "ApiRoutes");
    }
    config() {
        this.app
            .route("/ping")
            .get((req, res) => {
            res.send(`GET Request successful!`);
        });
        return this.app;
    }
}
exports.ApiRoutes = ApiRoutes;
