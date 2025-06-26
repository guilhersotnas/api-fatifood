const Produto = require("../models/Produto");

exports.criar = async (req, res) => {
  try {
    const novo = new Produto({
      ...req.body,
      imagem: req.file?.filename
    });
    await novo.save();
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.listar = async (req, res) => {
  const produtos = await Produto.find().sort({ data: -1 });
  res.json(produtos);
};