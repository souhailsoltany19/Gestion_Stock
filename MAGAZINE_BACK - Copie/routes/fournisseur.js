const express = require("express");
const router = express.Router();
const Fournisseur = require("../models/fournisseur.js");
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
//CRUD fournisseur

router.post("/createFournisseur", async (req, res) => {
 try {
  let data = req.body;
  let fournisseur = new Fournisseur(data);
  savedFournisseur = await fournisseur.save();
  res.status(200).send(savedFournisseur);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.post("/addFournisseur", upload.any("image"), async (req, res) => {
 try {
  data = req.body;
  fournisseur = new Fournisseur(data);
  fournisseur.image = filename;
  savedFournisseur = await fournisseur.save();
  filename = "";
  res.status(200).send(savedFournisseur);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getallFournisseur", async (req, res) => {
 try {
  fournisseurs = await Fournisseur.find();
  res.status(200).send(fournisseurs);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getByIdFournisseur/:id", async (req, res) => {
 try {
  myId = req.params.id;
  fournisseurs = await Fournisseur.findOne({ _id: myId });
  res.status(200).send(fournisseurs);
 } catch (error) {
  res.status(400).send(error);
 }
});
router.put("/updateFournisseur/:id", upload.any("image"), async (req, res) => {
 try {
  id = req.params.id;
  newData = req.body;
  updatedFournisseur = await Fournisseur.findByIdAndUpdate({ _id: id }, newData);
  res.status(200).send(updatedFournisseur);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.delete("/deleteFournisseur/:id", async (req, res) => {
 try {
  id = req.params.id;
  deletedFournisseur = await Fournisseur.findByIdAndDelete({ _id: id });
  res.status(200).send(deletedFournisseur);
 } catch (error) {
  res.status(400).send(error);
 }
});
module.exports = router;
