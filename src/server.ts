import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if(process.env.NODE_ENV !== "production") app.set('json spaces', 2);

app.use("/", routes);
app.get("/", (req, res, next) => {
    if(process.env.NODE_ENV !== "production") res.redirect(`http://localhost:${process.env.PORT || 7000}/home/`);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () =>
    console.log("\x1b[35m%s\x1b[0m", `[server] Server running on port: ${PORT}\n[server] ${new Date()}`));