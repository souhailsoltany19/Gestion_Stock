const mongoose = require("mongoose");

const Client = mongoose.model("Client", {
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 address1: { type: String, required: true },
 address2: { type: String },
 ville: { type: String, required: true },
 codePostal: { type: String, required: true },
 pays: { type: String, required: true },
 phone: { type: String, required: true },
 image: { type: String, required: true },
 email: { type: String, required: true },
});
module.exports = Client;
