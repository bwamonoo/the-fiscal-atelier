import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "User Password is required"],
      minLength: 6,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  // only validate/hash if the password actually changed
  if (!this.isModified("password")) return;

  // manual check because Mongoose validation runs AFTER this hook
  if (this.password.length < 6) {
    const error = new Error("Password must be at least 6 characters long");
    error.statusCode = 401;
    throw error;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password.toString(), salt);

  this.password = hashedPassword;
});

export const User = mongoose.model("User", userSchema);
