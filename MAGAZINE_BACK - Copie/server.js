const express = require("express");

const articleRoute = require("./routes/article");
const categorieRoute = require("./routes/categorie");
const commandCRoute = require("./routes/commandC");
const commandFRoute = require("./routes/commandF");
const clientRoute = require("./routes/client");
const fournisseurRoute = require("./routes/fournisseur");
const userRoute = require("./routes/user");

require("./config/connect");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/article", articleRoute);
app.use("/commandC", commandCRoute);
app.use("/commandF", commandFRoute);
app.use("/categorie", categorieRoute);
app.use("/user", userRoute);
app.use("/client", clientRoute);
app.use("/fournisseur", fournisseurRoute);

app.use("/getimage", express.static("./uploads"));

app.listen(3000, () => {
 console.log("server work");
});
