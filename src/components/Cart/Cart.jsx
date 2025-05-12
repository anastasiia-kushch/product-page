import { useEffect } from 'react';

export default function Cart({ cart }) {
  useEffect(() => {
    console.log(cart);
  }, []);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <h1>Cart</h1>
      <h2>{totalQuantity}</h2>

      <div class="cart-titles">
        <h3>Product Details</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
        <h3>Total</h3>
          </div>
          
          <ul>
              {cart.map()}
        </ul>
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

//     <div class="item">
//       <div class="product-info">
//         <img src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="">
//         <div class="product-details">
//           <span><strong>Iphone 6S</strong></span>
//           <span style="color: red; font-size: 12px;">Apple</span>
//           <a href="#">Remove</a>
//         </div>
//       </div>
//       <div class="quantity">
//         <svg width="12" viewBox="0 0 448 512"><path d="M416 208H32c-17.67..."/></svg>
//         <input type="text" value="1">
//         <svg width="12" viewBox="0 0 448 512"><path d="M416 208H272V64..."/></svg>
//       </div>
//       <div class="price">$400.00</div>
//       <div class="total">$400.00</div>
//     </div>

//     <!-- Повтори блок `.item` для других товаров, как выше -->

//     <a href="#" class="back-link">
//       <svg width="16" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627..."/></svg>
//       Continue Shopping
//     </a>
//   </section>

//   <aside class="summary">
//     <h1>Order Summary</h1>
//     <div class="summary-row">
//       <span>Items 3</span>
//       <span>590$</span>
//     </div>
//     <div>
//       <label>Shipping</label>
//       <select>
//         <option>Standard shipping - $10.00</option>
//       </select>
//     </div>
//     <div style="margin-top: 40px;">
//       <label for="promo">Promo Code</label>
//       <input type="text" id="promo" placeholder="Enter your code">
//     </div>
//   </aside>
// </div>
