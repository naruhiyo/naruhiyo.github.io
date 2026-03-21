import { GenericList } from '@src/components/GenericList';
import { Product } from '@src/components/Product';
import { PRODUCTS_DATA } from '@src/data/products';
import { ProductSchema } from '@src/types/Product';

export const ProductList = () => (
  <GenericList<ProductSchema>
    label={PRODUCTS_DATA.head}
    className="product-table"
    items={PRODUCTS_DATA.items}
    renderItem={(item) => <Product product={item.product} />}
    keyExtractor={(item) => item.product.order}
  />
);
