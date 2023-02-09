import { Link } from 'react-router-dom';
import './productCard.css';

export default function ProductCard(props) {
  return (
    <>
      <Link
        className="product-card"
        to={'/product'}
        style={{ textDecoration: 'none', outline: 'none', color: 'black' }}
      >
        <img src={props.image} alt="" />
      </Link>
    </>
  );
}
