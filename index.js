const Express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./Router/AuthRouter");
const categoryRouter = require("./Router/CategoryRouter");
const app = Express();

const connectDB = async () => {
  try {
    await Mongoose.connect(
      `mongodb+srv://yash:yash_123@cluster0.m90wznx.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log(`MongoDB Connected Omn: {conn.connection.host}`);
  } catch (error) {
    console.error("error", error.message);
  }
};

connectDB();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = "8080";
app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);

app.listen(PORT, (req, res) => {
  console.log(`server is running successfully!!`);
});
