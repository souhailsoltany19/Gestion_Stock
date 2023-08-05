const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//CRUD USER

router.post("/add", async (req, res) => {
 try {
  data = req.body;
  user = new User(data);
  salt = bcrypt.genSaltSync(10);
  cryptedPass = await bcrypt.hashSync(data.password, salt);
  user.password = cryptedPass;
  savedUser = await user.save();
  res.status(200).send(savedUser);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.post("/login", async (req, res) => {
 data = req.body;
 user = await User.findOne({ email: data.email });
 if (!user) {
  res.status(404).send("email or password invalid !");
 } else {
  validPass = bcrypt.compareSync(data.password, user.password);
  if (!validPass) {
   res.status(401).send("email or password invalid !");
  } else {
   payload = {
    _id: user._id,
    email: user.email,
    firstname: user.firstname,
   };
   token = jwt.sign(payload, "12345678");
   res.status(200).send({ mytoken: token });
  }
 }
});

router.get("/getall", async (req, res) => {
 try {
  users = await User.find();
  res.status(200).send(users);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getById/:id", async (req, res) => {
 try {
  myId = req.params.id;
  users = await User.findOne({ _id: myId });
  res.status(200).send(users);
 } catch (error) {
  res.status(400).send(error);
 }
});
router.put("/update/:id", async (req, res) => {
 try {
  id = req.params.id;
  newData = req.body;
  updatedUser = await User.findByIdAndUpdate({ _id: id }, newData);
  res.status(200).send(updatedUser);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.delete("/delete/:id", async (req, res) => {
 try {
  id = req.params.id;
  deletedUser = await User.findByIdAndDelete({ _id: id });
  res.status(200).send(deletedUser);
 } catch (error) {
  res.status(400).send(error);
 }
});
module.exports = router;
