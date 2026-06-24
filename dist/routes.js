import express from 'express';
import { loginmember, registermember } from './controller.js';
const route = express.Router();
route.post("/", registermember);
route.post("/login", loginmember);
export default route;
//# sourceMappingURL=routes.js.map