const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: String,
  tipo: { type: String, enum: ['doacao', 'venda'] },
  descricao: String,
  validade: String,
  preco: Number,
  imagem: String,
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Produto', ProdutoSchema);