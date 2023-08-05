const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categorie = mongoose.model("Categorie", {
 codeCategorie: { type: String, required: true },
 description: { type: String, required: true },
});
module.exports = Categorie;
