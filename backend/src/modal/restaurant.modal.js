import mongoose from "mongoose";
const { Schema, model } = mongoose;
const restaurantSchema = new Schema(
  {
    Restaurant_owner_name: {
      type: String,
      required: [true, "owner name is required"],
    },
    Restaurant_owner_phone: {
      type: String,
      required: [true, "phone is required"],
    },
    Restaurant_owner_email: {
      type: String,
      required: [true, "email is required"],
    },
    Restaurant_owner_slug: {
      type: String,
      required: [true, "slug is required"],
      lowercase: true,
    },
    Restaurant_owner_address: {
      type: String,
      required: [true, "address is required"],
    },
    Restaurant_owner_city: {
      type: String,
      required: [true, "city is required"],
    },
    Restaurant_owner_state: {
      type: String,
      required: [true, "state is required"],
    },
    Restaurant_owner_zip: {
      type: String,
      required: [true, "zip is required"],
    },
    Restaurant_owner_country: {
      type: String,
      required: [true, "country is required"],
    },
    slug: {
      type: String,
      required: [true, "slug is required"],
      lowercase: true,
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
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
