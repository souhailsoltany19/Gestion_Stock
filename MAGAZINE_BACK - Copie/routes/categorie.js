const express = require("express");
const router = express.Router();
const Categorie = require("../models/categorie.js");


//CRUD CMD

router.post("/createCategorie", async (req, res) => {
 try {
  let data = req.body;
  let categorie = new Categorie(data);
  savedCategorie = await categorie.save();
  res.status(200).send(savedCategorie);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getallCategorie", async (req, res) => {
 try {
  categories = await Categorie.find();
  res.status(200).send(categories);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getByIdCategorie/:id", async (req, res) => {
 try {
  myId = req.params.id;
  categories = await Categorie.findOne({ _id: myId });
  res.status(200).send(categories);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.put("/updateCategorie/:id", async (req, res) => {
 try {
  id = req.params.id;
  newData = req.body;
  updatedCategorie = await Categorie.findByIdAndUpdate({ _id: id }, newData);
  res.status(200).send(updatedCategorie);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.delete("/deleteCategorie/:id", async (req, res) => {
 try {
  id = req.params.id;
  deletedCategorie = await Categorie.findByIdAndDelete({ _id: id });
  res.status(200).send(deletedCategorie);
 } catch (error) {
  res.status(400).send(error);
 }
});
module.exports = router;
