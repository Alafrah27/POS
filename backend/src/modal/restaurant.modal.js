import mongoose from "mongoose";
const { Schema, model } = mongoose;
const restaurantSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    Restaurant_name: {
      type: String,
      required: [true, "owner name is required"],
      minlength: [4, "Name must be at least 4 characters long"],
      maxlength: [20, "Name cannot exceed 20 characters"],
    },
    Restaurant_owner_phone: {
      type: String,
      required: [true, "phone is required"],
      unique: true,
      match: [/^[0-9]{10}$/, "Please enter a valid phone number"],
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
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
