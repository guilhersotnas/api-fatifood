const express = require("express");
const router = express.Router();
const controller = require("../controllers/produtos.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, "uploads"),
  filename: (_, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.post("/", upload.single("imagem"), controller.criar);
router.get("/", controller.listar);

module.exports = router;