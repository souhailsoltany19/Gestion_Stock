const express = require("express");
const router = express.Router();
const CommandClient = require("../models/commandC.js");


//CRUD CMD

router.post("/createCommand", async (req, res) => {
 try {
  let data = req.body;
  let command = new CommandClient(data);
  savedCommand = await command.save();
  res.status(200).send(savedCommand);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getallCommand", async (req, res) => {
 try {
  commands = await CommandClient.find();
  res.status(200).send(commands);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getByIdCommand/:id", async (req, res) => {
 try {
  myId = req.params.id;
  commands = await CommandClient.findOne({ _id: myId });
  res.status(200).send(commands);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.put("/updateCommand/:id", async (req, res) => {
 try {
  id = req.params.id;
  newData = req.body;
  updatedCommand = await CommandClient.findByIdAndUpdate({ _id: id }, newData);
  res.status(200).send(updatedCommand);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.delete("/deleteCommand/:id", async (req, res) => {
 try {
  id = req.params.id;
  deletedCommand = await CommandClient.findByIdAndDelete({ _id: id });
  res.status(200).send(deletedCommand);
 } catch (error) {
  res.status(400).send(error);
 }
});
module.exports = router;
