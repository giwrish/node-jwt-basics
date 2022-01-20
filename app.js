//imports
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const notFoundMiddleware = require("./middleware/notFoundHandler");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const jwtRouter = require("./routes/jwtRouter");

//middlewares
app.use(express.static("/public"));
app.use(express.json());

//routes
app.use("/api/v1", jwtRouter);

//error handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
const startApp = async () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
