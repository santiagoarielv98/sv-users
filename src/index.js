import express from "express";
import { GlobalConfig } from "./config";
import router from "./routes";
import "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.set("view engine", "pug");
app.set("views", "src/views");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(GlobalConfig.PORT, () => {
  console.log(`Server listening on port ${GlobalConfig.PORT}`);
});
