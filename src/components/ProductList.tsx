import { Product } from '@src/components/Product';
import { PRODUCTS_DATA } from '@src/data/products';
import { ProductSchema } from '@src/types/Product';

export const ProductList = () => {
  return (
    <section aria-label={PRODUCTS_DATA.head} className="product-table">
      {PRODUCTS_DATA.items.map((item: ProductSchema) => (
        <Product key={item.product.order} product={item.product} />
      ))}
    </section>
  );
};
