import { Link } from 'react-router-dom';
import { DataProduct } from './dataProduct';
import ProductCard from './productCard';
import './productCard.css';

export default function ProductSlider(props) {
  return (
    <>
      <div className="infinite-carousel">
        {DataProduct.map((e, index) => {
          return <ProductCard image={e.image}></ProductCard>;
        })}
      </div>
    </>
  );
}
