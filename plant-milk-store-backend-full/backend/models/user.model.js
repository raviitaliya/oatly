import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    address1: {
      type: String,
      required: true,
    },

    address2: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    zipcode: {
      type: String,
      required: true,
    },

    primaryMobile: {
      type: String,
      required: true,
    },

    lastLogin: {
      type: Date,
      default: Date.now,
    },

    role: {
      type: String,
      enum: ["user", "admin", "delivery_boy"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    resetPasswordToken: String,

    resetPasswordExpires: Date,

    verificationToken: String,

    verificationTokenExpiresAt: Date,

    // Optional GeoJSON location
    // Only store this field when valid coordinates are available.
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },

    avatar: String,

    dateOfBirth: Date,

    gender: String,

    fcmTokens: [
      {
        type: String,
      },
    ],

    refreshTokenHash: String,

    failedLoginAttempts: {
      type: Number,
      default: 0,
    },

    lockedUntil: Date,

    marketingOptIn: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// Existing useful compound index
userSchema.index({
  role: 1,
  isBlocked: 1,
});

export const User = mongoose.model("User", userSchema);