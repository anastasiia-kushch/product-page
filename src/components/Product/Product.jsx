import { useState, useEffect } from 'react';
import productData from '../../assets/product.json';
import {
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  ShoppingCart,
} from 'lucide-react';
import css from './Product.module.css';

function Product({ addToCart }) {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    const { id, name, price } = product;
    if (selectedColor) {
      addToCart({ id, name, price, color: selectedColor, quantity });
    }
  };

  return (
    <div className="container">
      {product ? (
        <div className={css.productContainer}>
          <div className={css.imgContainer}>
            <button className={css.arrowLeft} onClick={handlePrev}>
              <ChevronLeft />
            </button>
            <img
              src={product.images[currentImageIndex]}
              alt={`Product ${currentImageIndex + 1} image`}
            />
            <button className={css.arrowRight} onClick={handleNext}>
              <ChevronRight />
            </button>
          </div>

          <div className={css.mainInfo}>
            <h1>{product.name}</h1>
            <p className={css.price}>${product.price}</p>
            <p>{product.description}</p>
          </div>
          <div className={css.description}>
            {selectedColor && (
              <p>
                <b>Color:</b> {selectedColor.name}
              </p>
            )}
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
          <div>
            <div>
              <button onClick={handleDecrease}>
                <Minus />
              </button>
              <input
                min="1"
                value={quantity}
                onChange={handleChange}
                style={{ width: '50px', textAlign: 'center' }}
              />
              <button onClick={handleIncrease} aria-label="Increase quantity">
                <Plus />
              </button>
            </div>

            <button onClick={handleAddToCart} disabled={!selectedColor}>
              <ShoppingCart />
            </button>
          </div>
        </div>
      ) : (
        <p>Oops... Try again</p>
      )}
    </div>
  );
}

export default Product;
