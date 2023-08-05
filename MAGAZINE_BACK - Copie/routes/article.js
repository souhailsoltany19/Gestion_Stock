const express = require("express");
const router = express.Router();
const Article = require("../models/article.js");
const multer = require("multer");
const { default: mongoose } = require("mongoose");
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
//CRUD ARTICLE

router.post("/createArticle", async (req, res) => {
 try {
  let data = req.body;
  let article = new Article(data);
  savedArticle = await article.save();
  res.status(200).send(savedArticle);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.post("/addArticle", upload.any("image"), async (req, res) => {
 try {
  data = req.body;
  article = new Article(data);
  article.image = filename;
  savedArticle = await article.save();
  filename = "";
  res.status(200).send(savedArticle);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getallArticle", async (req, res) => {
 try {
  articles = await Article.find();
  res.status(200).send(articles);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.get("/getByIdArticle/:id", async (req, res) => {
 try {
  myId = req.params.id;
  articles = await Article.findOne({ _id: myId });
  res.status(200).send(articles);
 } catch (error) {
  res.status(400).send(error);
 }
});




router.put("/updateArticle/:id", upload.any("image"), async (req, res) => {
 try {
  id = req.params.id;
  newData = req.body;
  updatedArticle = await Article.findByIdAndUpdate({ _id: id }, newData);
  res.status(200).send(updatedArticle);
 } catch (error) {
  res.status(400).send(error);
 }
});

router.delete("/deleteArticle/:id", async (req, res) => {
 try {
  id = req.params.id;
  deletedArticle = await Product.findByIdAndDelete({ _id: id });
  res.status(200).send(deletedArticle);
 } catch (error) {
  res.status(400).send(error);
 }
});
module.exports = router;
