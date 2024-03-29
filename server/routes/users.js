import express from "express";

import { login, signup } from "../controllers/auth.js";
import {
  follow,
  getAllUsers,
  unfollow,
  updateProfile,
} from "../controllers/users.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);
router.put("/follow/:id", auth, follow);
router.put("/unfollow/:id", auth, unfollow);

export default router;