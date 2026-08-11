import { PageHeader } from '@src/components/PageHeader';
import { ProductList } from '@src/components/ProductList';
import { useTranslation } from 'react-i18next';

export const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <section className="page page-section page-products">
      <div className="page-container">
        <div className="products-intro">
          <PageHeader number="02" label={t('pages.products.label')} title="Pro" emphasis="ducts" />
        </div>
        <ProductList />
      </div>
    </section>
  );
};
