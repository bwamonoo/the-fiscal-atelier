export const errorMiddleware = (err, req, res, next) => {
  try {
    // use err.message directly if the custom logic doesn't override it
    let statusCode = err.statusCode || 500;
    let message = err.message || "Server Error";

    console.error("--- ERROR LOG ---", err);

    // bcrypt Type Error (Illegal arguments)
    if (err.message.includes("Illegal arguments")) {
      message = "Invalid input type. Please ensure passwords are strings.";
      statusCode = 400;
    }

    // mongoose bad ObjectId
    if (err.name === "CastError") {
      message = "Resource not found";
      statusCode = 404;
    }

    // mongoose duplicate key
    if (err.code === 11000) {
      message = "Duplicate field value entered";
      statusCode = 400;
    }

    // mongoose validation error
    if (err.name === "ValidationError") {
      message = Object.values(err.errors)
        .map((val) => val.message)
        .join(", ");
      statusCode = 400;
    }

    res.status(statusCode).json({
      success: false,
      error: message,
    });
  } catch (error) {
    next(error);
  }
};
