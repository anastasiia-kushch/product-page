import { useState, useEffect } from 'react';
import productData from '../../assets/product.json';

function Product({ addToCart }) {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProduct(productData);
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity('');
    }
  };

  const handleAddToCart = () => {
    const { id, name, price } = product;
    if (selectedColor) {
      addToCart({ id, name, price, color: selectedColor, quantity });
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {selectedColor && <p>Color: {selectedColor.name}</p>}
          </div>
          <div>
            <p>Choose color</p>
            <div style={{ display: 'flex', overflowX: 'auto' }}>
              {product.colors.map((color) => (
                <div
                  key={color.id}
                  onClick={() => handleColorSelect(color)}
                  style={{
                    cursor: 'pointer',
                    marginRight: '10px',
                    border:
                      selectedColor?.id === color.id
                        ? '2px solid blue'
                        : 'none',
                  }}
                >
                  <img src={color.image} alt={color.name} width="100" />
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleDecrease}>−</button>
          <input
            min="1"
            value={quantity}
            onChange={handleChange}
            style={{ width: '50px', textAlign: 'center' }}
          />
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleAddToCart} disabled={!selectedColor}>
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Oops... Try again</p>
      )}
    </div>
  );
}

export default Product;
