export default function CartPage({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} – {item.color.name} – Quantity: {item.quantity}
            </p>
          </div>
        ))
      )}
      <p>Total amount (должно быть)</p>
    </div>
  );
}
