// Obtém o ID do produto a partir dos parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Verifica se o ID do produto foi passado na URL
if (id) {
  const url = `https://fakestoreapi.com/products/${id}`;

  fetch(url)
    .then(response => response.json())
    .then(produto => {
      const detalhesProduto = document.getElementById("detalhes-produto");
      detalhesProduto.classList.add("detalhe");
      detalhesProduto.classList.add("col-12");

      const tituloElement = document.createElement("p");
      tituloElement.textContent = produto.title;
      tituloElement.classList.add("title");

      const descricaoElement = document.createElement("p");
      descricaoElement.textContent = produto.description;
      descricaoElement.classList.add("descricao");

      const imagemElement = document.createElement("img");
      imagemElement.src = produto.image;
      imagemElement.classList.add("foto");

      const precoElement = document.createElement("p");
      precoElement.textContent = "Just: R$" + produto.price;
      precoElement.classList.add("preco");

      detalhesProduto.appendChild(imagemElement);
      detalhesProduto.appendChild(tituloElement);
      detalhesProduto.appendChild(descricaoElement);
      detalhesProduto.appendChild(precoElement);
      
    })
    .catch(error => {
      console.log("Erro ao obter detalhes do produto da API.", error);
    });
} else {
  // Caso o ID do produto não seja passado, exibe uma mensagem de erro
  const detalhesProduto = document.getElementById("detalhes-produto");
  detalhesProduto.textContent = "ID do produto não especificado na URL.";
}