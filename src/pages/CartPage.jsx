import Cart from '../components/Cart/Cart';

export default function CartPage({ cart, deleteItem }) {
  return (
    <div>
      <Cart cart={cart} deleteItem={deleteItem} />
    </div>
  );
}
