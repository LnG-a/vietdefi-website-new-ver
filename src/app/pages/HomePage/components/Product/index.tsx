import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import { useTranslation } from 'react-i18next';
import ProductSlider from 'app/components/ProductSlider';

const Product = () => {
  const { t } = useTranslation('translation');
  return (
    <div className="product-content">
      <div className="product-wrap">
        <div className="product-title">
          <h2>{t('HomePage.Product.title')}</h2>
        </div>
        <ProductSlider></ProductSlider>
      </div>
    </div>
  );
};

export default Product;
