import { GenericList } from '@src/components/GenericList';
import { Product } from '@src/components/Product';
import { PRODUCTS_DATA } from '@src/data/products';
import { ProductSchema } from '@src/types/Product';
import { useTranslation } from 'react-i18next';

export const ProductList = () => {
  const { t } = useTranslation();

  return (
    <GenericList<ProductSchema>
      label={t(PRODUCTS_DATA.head)}
      className="product-table"
      items={PRODUCTS_DATA.items}
      renderItem={(item) => <Product product={item.product} />}
      keyExtractor={(item) => item.product.order}
    />
  );
};
