import express from "express";
import bodyParser from "body-parser";
import router from "./routes.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
