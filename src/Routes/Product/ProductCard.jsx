import React from "react";

const ProductCard = ({ product, liked, onLike, onUnlike }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={liked ? onUnlike : onLike}
        style={{ backgroundColor: liked ? "red" : "gray" }}
      >
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default ProductCard;
