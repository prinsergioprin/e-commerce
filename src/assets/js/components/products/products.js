import "./products.css";

export function renderProducts() {
  const products = getProducts();
  const main = document.querySelector("main");
  const productsContainer = document.createElement("section");

  productsContainer.classList.add("content-container");

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");

    productElement.classList.add("product");

    productElement.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.title}" width="200" />
            <p><strong>Price:</strong> $${product.price}</p>
        `;

    productsContainer.appendChild(productElement);
  });
  main.appendChild(productsContainer);
}

function getProducts() {
  try {
    const products = localStorage.getItem("products");
    return JSON.parse(products);
  } catch (error) {
    console.error("There are no products in local storage", error);
  }
}
