function filterProducts() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const productElements = document.getElementsByClassName('tudo');

  Array.from(productElements).forEach(produtoDiv => {
    const titleElement = produtoDiv.getElementsByClassName('tit')[0];
    const title = titleElement.textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      produtoDiv.style.display = 'block';
    } else {
      produtoDiv.style.display = 'none';
    }
  });
}



function obterProdutos() {
    const url = "https://fakestoreapi.com/products";
  
    fetch(url)
      .then(response => response.json())
      .then(produtos => {
        const produtosContainer = document.getElementById("produtos-container");
        produtos.forEach(produto => {
          const { title, category, image, price, id } = produto;
  
          const produtoDiv = document.createElement("div");
          produtoDiv.classList.add("col-xxl-3");
          produtoDiv.classList.add("col-lg-4");
          produtoDiv.classList.add("col-md-6");
          produtoDiv.classList.add("border-bottom")
          produtoDiv.classList.add("border-primary")
          produtoDiv.classList.add("border-2")
          produtoDiv.classList.add("produto");
          produtoDiv.classList.add("tudo");
          produtoDiv.classList.add("pt-3");
  
          const tituloElement = document.createElement("p");
          tituloElement.textContent = title;
          tituloElement.classList.add("tit");
  
          const categoriaElement = document.createElement("p");
          categoriaElement.textContent = category;          categoriaElement.classList.add("cat");
  
          const imagemElement = document.createElement("img");
          imagemElement.src = image;
          imagemElement.classList.add("fot");
  
          const precoElement = document.createElement("p");
          precoElement.textContent = "Just: $" + price;
          precoElement.classList.add("valor");

          const detailsButton = document.createElement('button');
          detailsButton.classList.add('btn');
          detailsButton.classList.add('btn-primary');
          detailsButton.textContent = 'INFO';
          detailsButton.classList.add('d-flex');
          detailsButton.classList.add('m-auto');
          detailsButton.classList.add('mb-3');
          detailsButton.classList.add('mt-0');
          detailsButton.addEventListener('click', () => {
            redirecionarParaDetalhes(id);
          });
          
          produtoDiv.appendChild(imagemElement);
          produtoDiv.appendChild(tituloElement);
          produtoDiv.appendChild(categoriaElement);
          produtoDiv.appendChild(precoElement);
          produtoDiv.appendChild(detailsButton);
  
          
  
          produtosContainer.appendChild(produtoDiv);
        });
      })
      .catch(error => {
        console.log("Erro ao obter produtos da API.", error);
      });
  }
  
function redirecionarParaDetalhes(id) {
  const urlDetalhes = "detalhes.html?id=" + id;
  window.location.href = urlDetalhes;
}
  

  obterProdutos();