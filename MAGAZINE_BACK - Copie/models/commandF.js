const mongoose = require("mongoose");

const CommandFournisseur = mongoose.model("CommandFournisseur", {
 codeCommand: { type: String, required: true },
 dateCommand: { type: Date, required: true },
 idFournisseur: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Fournisseur",
 },
});
module.exports = CommandFournisseur;
