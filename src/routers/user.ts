import { Router } from "express";
import { register } from "../controllers/user";
// import { register } from "module";

const router = Router()

router.post('/register',register)
export default router