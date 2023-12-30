import express from "express";

const __dirname = process.cwd();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (_, res) => res.sendFile(__dirname + "/index.html"));

app.listen(3500, () => console.log("Server is running on port 3500"));