"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesConfig = void 0;
class RoutesConfig {
    constructor(app, name) {
        this.getName = () => {
            return this.name;
        };
        this.app = app;
        this.name = name;
        this.config();
    }
}
exports.RoutesConfig = RoutesConfig;
