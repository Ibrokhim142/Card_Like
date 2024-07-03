import React, { useState, useEffect } from "react";
import axios from "axios";
import LikedProducts from "./Routes/Like/Like";
import ProductCard from "./Routes/Product/ProductCard";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleLike = (product) => {
    if (!likedProducts.includes(product)) {
      setLikedProducts([...likedProducts, product]);
    }
  };

  const handleUnlike = (product) => {
    setLikedProducts(likedProducts.filter(item => item.id !== product.id));
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            liked={likedProducts.includes(product)}
            onLike={() => handleLike(product)}
            onUnlike={() => handleUnlike(product)}
          />
        ))}
      </div>
      <LikedProducts products={likedProducts} onUnlike={handleUnlike} />
    </div>
  );
};

export default App;
