"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
class TestRoutes {
    constructor() {
        this.user_controller = new userController_1.UserController();
    }
    route(app) {
        app.post('/api/user', (req, res) => {
            this.user_controller.create_user(req, res);
        });
        app.get('/api/user/:id', (req, res) => {
            this.user_controller.get_user(req, res);
        });
        app.put('/api/user/:id', (req, res) => {
            this.user_controller.update_user(req, res);
        });
        app.delete('/api/user/:id', (req, res) => {
            this.user_controller.delete_user(req, res);
        });
    }
}
exports.TestRoutes = TestRoutes;
