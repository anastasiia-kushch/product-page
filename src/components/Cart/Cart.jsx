import { NavLink } from 'react-router-dom';
import css from './Cart.module.css';
import { ArrowLeft, Trash2 } from 'lucide-react';

export default function Cart({ cart, deleteItem }) {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="container">
      <div className={css.cartContainer}>
        <div className={css.heading}>
          <h1>Cart</h1>
          <h2>{totalQuantity} items</h2>
        </div>
        <div className={css.titles}>
          <h3>Product Details</h3>
          <div className={css.groupTitles}>
            <h3>Quantity</h3>
            <h3>Price</h3>
            <h3>Total</h3>
          </div>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className={css.productList}>
            {cart.map((item, index) => (
              <li className={css.productItem} key={index}>
                <div className={css.mainInfo}>
                  <strong>{item.name}</strong>
                  <p>Color: {item.color.name}</p>
                </div>
                <div className={css.addInfo}>
                  <p>{item.quantity}</p>
                  <p>${item.price}</p>
                  <p>${item.quantity * item.price}</p>
                </div>
                <button
                  className={css.deleteButton}
                  onClick={(e) => {
                    deleteItem(index);
                    e.currentTarget.blur();
                  }}
                >
                  <Trash2 className={css.deleteIcon} />
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className={css.cartFooter}>
          <div className={css.backLink}>
            <ArrowLeft className={css.icon} />
            <NavLink to="/product" className={css.link}>
              Continue shopping
            </NavLink>
          </div>

          <p className={css.total}>
            <strong>Total amount:</strong> ${totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
