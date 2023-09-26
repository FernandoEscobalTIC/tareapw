import express from "express";
import {loginUser, createUser} from "../controllers/user.js";
import verifyToken from "../middleware/authMiddlw.js";

export const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Si lees esto es porque estás autenticado', userId: req.userId });
});
export default router;
