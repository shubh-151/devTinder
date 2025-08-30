const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cors = require("cors")

const cookieParser = require("cookie-parser");
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}))


app.use(express.json());
app.use(cookieParser());
const authRouter = require ("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");


app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);



connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7000, () => {
      console.log("Server is listening on port 7000...");
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });
