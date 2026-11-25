
// Q6 - Fetch and Display Product Data

async function fetchProducts() {
    try {
        // Fetch data from Fake Store API
        const response = await fetch("https://fakestoreapi.com/products");

        // Convert response into JSON
        const products = await response.json();

        // Display product details
        products.forEach((product) => {
            console.log("Product Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image URL:", product.image);
            console.log("--------------------------------");
        });

    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

// Call the function
fetchProducts();
