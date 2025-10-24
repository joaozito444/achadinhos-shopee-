function buscarProduto() {
  const codigo = document.getElementById('codigo').value.trim();
  const mensagem = document.getElementById('mensagem');
  const produtos = {
    "101": "https://s.shopee.com.br/7AVBBBarRo",
    "102": "https://s.shopee.com.br/10uXprc0Ga",
    "103": "https://s.shopee.com.br/7AVBBCs7nR"
  };
  if (produtos[codigo]) {
    window.location.href = produtos[codigo];
  } else {
    mensagem.textContent = "Código não encontrado. Verifique e tente novamente.";
  }
}
