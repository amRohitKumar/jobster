import express from "express";
const router = express.Router();
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isLogin from "../middlewares/auth.js";

router.post("/register", async (req, res) => {
  const { name, email, password, lastName } = req.body;
  const resp = await User.findOne({ email: email });
  if (resp) {
    res.status(400).send({ msg: "Email already in use" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      lastName,
      location: "",
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
    res.status(200).json({
      user: {
        email: email,
        name: name,
        lastName: lastName,
        location: newUser.location,
        token,
      },
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const resp = await User.findOne({ email });
  if (!resp) {
    return res.status(400).send({ msg: "Invalid Credentials" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, resp.password);
  if (!isPasswordCorrect) {
    return res.status(400).send({ msg: "Invalid Credentials" });
  }
  const token = jwt.sign({ userId: resp._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  res.status(200).json({
    user: {
      email: resp.email,
      lastName: resp.lastName,
      location: resp.location,
      name: resp.name,
      token,
    },
  });
});

router.patch("/updateUser", isLogin, async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    return res.status(400).json({ msg: "Please provide all values" });
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user.save();

  const token = jwt.sign({ userId: req.user.userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  res.status(200).json({ user: { email, name, lastName, location, token } });
});

export default router;
