import Router from 'express-promise-router'
import {
  loginHandler,
  profileHandler,
  signupHandler,
} from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.post("/signup", signupHandler);

router.post("/login", loginHandler);

router.get("/profile", requireAuth, profileHandler);

export default router;
