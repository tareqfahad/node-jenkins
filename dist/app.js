"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = __importDefault(require("restify"));
const server = restify_1.default.createServer();
server.get("/hello", (req, res, next) => {
    res.status(200);
    res.send({
        code: "ok",
    });
    return next();
});
server.listen(3000, () => console.log("Server is running"));
//# sourceMappingURL=app.js.map