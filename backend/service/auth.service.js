import { User } from "../models/users.model.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

export const loginService = async (email, password) => {
    if(!email || !password) {
        throw new Error('Email and password are required');
    }

    const user = await User.findOne({ where: { email } });
    if(!user) {
        throw new Error('Invalid Email or password');
    }

    const matchPass = await comparePassword(password, user.password);
    if(!matchPass) {
        throw new Error('Invalid password');
    }

    const token = generateToken({ id: user.id, username: user.username, email: user.email });
    return { 
            token,
            user: {
              username: user.username,
            },
          }
};

export const registerService = async ({ username, email, password }) => {
  if (
    typeof username !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    !username.trim() ||
    !email.trim() ||
    !password.trim()
  ) {
    const err = new Error("Username, email and password are required");
    err.statusCode = 400;
    throw err;
  }

  const isExist = await User.findOne({ where: { email: email.trim() } });
  if (isExist) {
    const err = new Error("Email already in use");
    err.statusCode = 409;
    throw err;
  }

  const newUser = await User.create({
    username: username.trim(),
    email: email.trim(),
    password: password.trim(), // hash via hook
  });

  const token = generateToken({
    id: newUser.id,
    username: newUser.username,
    email: newUser.email,
  });

  return {
    token,
    id: newUser.id,
    username: newUser.username,
    email: newUser.email,
  };
};


