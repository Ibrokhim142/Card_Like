import React from "react";

const LikedProducts = ({ products, onUnlike }) => {
  return (
    <div className="liked-products">
      <h2>Liked Products</h2>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="liked-product">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <button onClick={() => onUnlike(product)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No liked products yet.</p>
      )}
    </div>
  );
};

export default LikedProducts;




