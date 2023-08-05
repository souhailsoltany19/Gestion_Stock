const express = require("express");
const router = express.Router();
const Client = require("../models/client.js");
const multer = require("multer");
filename = "";
const myStorage = multer.diskStorage({
 destination: "./uploads",
 filename: (req, file, redirect) => {
  let date = Date.now();
  let fl = date + "." + file.mimetype.split("/")[1];
  redirect(null, fl);
  filename = fl;
 },
});
const upload = multer({ storage: myStorage });
//CRUD client



router.post("/addClient", upload.any("image"), async (req, res) => {
 try {
  data = req.body;
  client = new Client(data);
  client.image = filename;
  savedClient = await client.save();
  filename = "";
  res.status(200).send(savedClient);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getallClient", async (req, res) => {
 try {
  clients = await Client.find();
  res.status(200).send(clients);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getByIdClient/:id", async (req, res) => {
 try {
  myId = req.params.id;
  clients = await Client.findOne({ _id: myId });
  res.status(200).send(clients);
 } catch (error) {
  res.status(400).send(error);
 }
});
router.put("/updateClient/:id", upload.any("image"), async (req, res) => {
 try {
  id = req.params.id;
  newData = req.body;
  updatedClient = await Client.findByIdAndUpdate({ _id: id }, newData);
  res.status(200).send(updatedClient);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.delete("/deleteClient/:id", async (req, res) => {
 try {
  id = req.params.id;
  deletedClient = await Client.findByIdAndDelete({ _id: id });
  res.status(200).send(deletedClient);
 } catch (error) {
  res.status(400).send(error);
 }
});


module.exports = router;
