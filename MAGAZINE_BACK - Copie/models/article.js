const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = mongoose.model("Article", {
 codeArticle: { type: String, required: true },
 designation: { type: String, required: true },
 priceUnityHT: { type: String, required: true },
 priceUnityTTC: { type: String, required: true },
 tauxTVA: { type: String, required: true },
 image: { type: String, required: true },
 idCategorie: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Categorie",
 },
});
module.exports = Article;
