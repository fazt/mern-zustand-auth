import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { NotFound } from "http-errors";
import { JWT_SECRET } from "../config";

export const signupHandler = async (req: Request, res: Response) => {
  console.log(req.body);
  // find existing user
  const userFound = await User.findOne({
    email: req.body.email,
  });

  if (userFound) throw new NotFound("User already exists");

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  await newUser.hashPassword();

  const savedUser = await newUser.save();

  const token = jwt.sign(
    {
      _id: savedUser._id,
    },
    JWT_SECRET,
    {
      expiresIn: 60 * 60 * 24, // 24 hours
    }
  );

  return res.json({
    token,
  });
};

export const loginHandler = async (req: Request, res: Response) => {
  console.log(req.body);
  // find existing user
  const userFound = await User.findOne({ email: req.body.email });
  if (!userFound) throw new NotFound("User not found");

  // compare password
  // const validPassword = await User.comparePassword(userFound.password);
  const validPassword = await userFound.comparePassword(req.body.password);
  if (!validPassword) throw new NotFound("Invalid password");

  const token = jwt.sign(
    {
      _id: userFound._id,
    },
    JWT_SECRET,
    {
      expiresIn: 60 * 60 * 24, // 24 hours
    }
  );

  return res.json({
    token,
  });
};

export const profileHandler = async (req: Request, res: Response) => {
  const userProfile = await User.findOne({ _id: req.user._id }).select('-password');
  return res.json(userProfile)
};
