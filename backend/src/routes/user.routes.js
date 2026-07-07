import express from 'express';

import {
  signup,
  login,
  logout,
  updateAvatar,
  getMe,
  updateProfile,
  uploadProfilePic
} from '../controllers/user.controllers.js';

import { verifyJWT } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", verifyJWT, logout);

router.post(
  "/upload-profile-pic/:id",
  upload.single("profilePic"),
  uploadProfilePic
);

router.get("/me", verifyJWT, getMe);

router.put("/update", verifyJWT, updateProfile);

router.put(
  "/update-avatar",
  verifyJWT,
  upload.single("avatar"),
  updateAvatar
);

export default router;



router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth routes loaded"
  });
});



router.get("/login", (req, res) => {
  res.json({ message: "Login route exists" });
});


router.post("/login", (req, res) => {
  res.json({
    success: true,
    body: req.body
  });
});