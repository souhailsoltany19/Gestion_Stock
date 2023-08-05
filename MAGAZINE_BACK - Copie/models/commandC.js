const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandClient = mongoose.model("CommandClient", {
 codeCommand: { type: String, required: true },
 dateCommand: { type: Date, required: true },
 idClient: {
  type: Schema.Types.ObjectId,
  ref: "Client",
 },
});
module.exports = CommandClient;
