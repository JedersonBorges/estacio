var receitas = [
  {
    "titulo": "Arroz de Couve-Flor",
    "imagem": "arroz-couve-flor.jpg", 
    "ingredientes": ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
    "preparo": "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar."
  },
  {
    "titulo": "Bolo de Café",
    "imagem": "bolo-cafe.jpg", 
    "ingredientes": ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"],
    "preparo": "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura."
  },
  {
    "titulo": "Coxinha de Brigadeiro",
    "imagem": "coxinha-brigadeiro.jpg", 
    "ingredientes": ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"],
    "preparo": "Junte o leite condensado, chocolate em pó e manteiga. Aqueça em fogo baixo. Envolva os morangos e passe no granulado."
  }
];

function getListaIngredientes(receita) {
  return `<ul>${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((a, b) => a + b, '')}</ul>`;
}

function getCard(receita) {
  return `
    <div class="card" style="width: 250px;">
      <img src="${receita.imagem}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${receita.titulo}</h5>
        <div class="card-text">
          ${getListaIngredientes(receita)}
          <hr>
          ${receita.preparo}
        </div>
      </div>
    </div>
  `;
}

function preencheCatalogo() {
  var pnlCatalogo = document.getElementById("pnlCatalogo");
  var htmlReceitas = receitas.map(receita => getCard(receita)).reduce((a, b) => a + b, '');
  pnlCatalogo.innerHTML = htmlReceitas;
}
