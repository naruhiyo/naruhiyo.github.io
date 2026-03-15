import { ProductSchema } from '@src/types/Product';
import React from 'react';

export const Product = (props: ProductSchema) => {
  const product = props.product;

  return (
    <a className="product-row" href={product.github} target="_blank" rel="noreferrer">
      <span className="product-num">{product.order}</span>
      <div className="product-name-wrap">
        <p className="product-name">{product.name}</p>
        <span className="product-tag">{product.tag}</span>
      </div>
      <p className="product-desc">{product.desc}</p>
      {product.image && (
        <div className="product-img-wrap">
          <img src={product.image} alt={product.name} className="product-img" />
        </div>
      )}
      <span className="product-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
};
