import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [4, "Username must be at least 4 characters long"],
      maxlength: [20, "Username cannot exceed 20 characters"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["super_admin", "admin","restaurant_owner", "user"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    expiresAt: {
      type: Date,
      default: Date.now() + 10 * 60 * 1000,
    },
    otp: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    ExpireOtp: {
      type: Date,
    },
    otpAttempts: {
      type: Number,
      default: 0,
    },
    lockedUntil: {
      type: Date,
      default: null,
    },

    resetPasswordOtp: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },

    refreshToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

const User = model("User", userSchema);
export default User;
