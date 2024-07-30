import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); 
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="App p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Store</h1>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card glass w-full md:w-80 lg:w-96 bg-white shadow-md rounded-lg overflow-hidden"
          >
            <figure>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-fit"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold mb-2">
                {product.title}
              </h2>
              <p className="text-lg text-gray-700">${product.price}</p>
              <div className="card-actions flex justify-end mt-4">
                <button className="btn btn-primary bg-gray-600 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
