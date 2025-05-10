import Product from '../components/Product/Product';

export default function ProductPage({ addToCart }) {
  return (
    <div>
      <Product addToCart={addToCart} />
    </div>
  );
}
