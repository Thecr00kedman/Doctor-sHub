import { Router } from "express"
import { Adduser } from "../Controllers/userControllers.js";

const router = Router();

router.post('/AddUser',Adduser)

export default router