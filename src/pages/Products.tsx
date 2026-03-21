import Box from '@mui/material/Box';
import { PageHeader } from '@src/components/PageHeader';
import { ProductList } from '@src/components/ProductList';

export const ProductsPage = () => {
  return (
    <Box component="section" className="page page-section page-products">
      <div className="page-container">
        <div className="products-intro">
          <PageHeader number="02" label="Our Works" title="Pro" emphasis="ducts" />
        </div>
        <ProductList />
      </div>
    </Box>
  );
};
