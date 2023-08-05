const mongoose = require("mongoose");
const User = mongoose.model("User", {
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 codeFiscal: { type: String, required: true },
 address1: { type: String, required: true },
 address2: { type: String },
 ville: { type: String, required: true },
 codePostal: { type: String, required: true },
 pays: { type: String, required: true },
 description: { type: String, required: true },
 token : {type: String},
 phone: { type: String, required: true },
 image: { type: String, required: true },
 email: { type: String, required: true },
 password: { type: String, required: true },
});
module.exports = User;
