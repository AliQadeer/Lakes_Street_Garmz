document.addEventListener("DOMContentLoaded", function () {
    // Array to store shoe product objects
    const shoesArray = [
      {
        name: "Red Tape Men's Sports Walking Shoes",
        description: "Sneakers 2024 Limited Edition",
        sizes: ["30", "32", "36", "40", "42"],
        colors: ["color_one", "color_two"],
        price: "$138.00",
        discountedPrice: "$160.00",
        imagePath: "images/product_1.png",
      },
      {
        name: "Red Tape Men's Sports Walking Shoes",
        description: "Sneakers 2024 Limited Edition",
        sizes: ["40", "42"],
        colors: ["color_one", "color_two"],
        price: "$190.00",
        discountedPrice: "$220.00",
        imagePath: "images/product_2.png",
      },
      {
        name: "Red Tape Men's Sports Walking Shoes",
        description: "Sneakers 2024 Limited Edition",
        sizes: ["40", "42"],
        colors: ["color_one", "color_two"],
        price: "$190.00",
        discountedPrice: "$220.00",
        imagePath: "images/product_3.png",
      },
      // Add more shoe product entries as needed
    ];

    // Display shoes on the frontend
    generateShoes();

    // Function to display shoes on the frontend
    function generateShoes() {
      const shoesContainer = document.getElementById("shoes-container");

      // Loop through each shoe product in the array
      shoesArray.forEach((shoe) => {
        // Create HTML structure for each shoe product
        const shoeDiv = document.createElement("div");
        shoeDiv.className = "col-12 col-xl-4 mt-4";
        shoeDiv.innerHTML = `
          <div class="bg-white position-relative product_cart shadow p-3">
            <h2 class="product_name fw-bold">${shoe.name}</h2>
            <p>${shoe.description}</p>
            <ul class="size d-flex">
              <p class="me-2 m-0 fw-bold">Size</p>
              ${shoe.sizes.map(
                (size) => `<li><a href="javascript:void(0)" class="active_size">${size}</a></li>`
              ).join('')}
            </ul>
            <div class="d-flex align-items-center color_main">
              <span class="fw-bold">Color</span>
              ${shoe.colors.map(
                (color) => `<a href="javascript:void(0)" class="select_color ${color} mx-2"></a>`
              ).join('')}
            </div>
            <h3 class="price fw-bold mt-3 mb-0">${shoe.price}</h3>
            <strike class="text-secondary">${shoe.discountedPrice}</strike>
            <a href="javascript:void(0)" class="product_img">
              <img src="${shoe.imagePath}" alt="Product-image" class="img-fluid" />
            </a>
            <div class="text-center mt-3">
              <a href="javascript:void(0)" class="theme-btn fw-bold">Add to Cart</a>
            </div>
          </div>
        `;

        // Append the shoe product div to the container
        shoesContainer.appendChild(shoeDiv);
      });
    }
  });