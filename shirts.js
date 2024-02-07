document.addEventListener("DOMContentLoaded", function () {
  // Array to store product objects
  const productsArray = [
    {
      name: "NIKE DRILL 23 SET OBSIDIAN - HALF ZIP & TROUSERS",
      description: "Sale",
      price: "$100.00",
      imagePath: "images/shirt_1.webp",
    },
    {
      name: "NIKE DRILL 23 SET RED - 4 PIECE",
      description: "Sale",
      price: "$80.00",
      imagePath: "images/shirt_2.webp",
    },
    {
      name: "NIKE DRILL 23 SET WHITE - HALF ZIP & TROUSERS",
      description: "Sale",
      price: "$60.00",
      imagePath: "images/shirt_3.jpg",
    },
    // Add more product entries as needed
  ];

  // Display products on the frontend
  generateProducts();

  // Function to display products on the frontend
  function generateProducts() {
    const productsContainer = document.getElementById("product-container");

    // Clear the container before appending new products
    productsContainer.innerHTML = "";

    // Loop through each product in the array
    productsArray.forEach((product) => {
      // Create HTML structure for each product
      const productDiv = document.createElement("div");
      productDiv.className = "col-lg-4 col-xl-4 mt-3";
      productDiv.innerHTML = `
        <div class="bg-white position-relative product_cart shadow p-3">
          <img src="${product.imagePath}" alt="Product-Image" class="img-fluid">
          <h5 class="my-3 fw-bold product_name">${product.name}</h5>
          <p>${product.description}</p>
          <h3 class="price fw-bold mt-3 mb-0">${product.price}</h3>
          <div class="text-center mt-3">
            <a href="javascript:void(0)" class="theme-btn fw-bold">Add to Cart</a>
          </div>
        </div>
      `;

      // Append the product div to the container
      productsContainer.appendChild(productDiv);
    });
  }
});