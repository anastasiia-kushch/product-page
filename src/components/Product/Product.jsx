import { useState, useEffect } from 'react';
import productData from '../../assets/product.json';
import {
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  ShoppingCart,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import css from './Product.module.css';

export default function Product({ addToCart }) {
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
    const { id, name, price, images } = product;
    if (selectedColor) {
      addToCart({ id, name, price, images, color: selectedColor, quantity });
      toast.success('Added to cart!');
    } else {
      toast.error('Choose the color!');
    }
  };

  return (
    <div className="container">
      {product ? (
        <div className={css.productContainer}>
          <div className={css.imgContainer}>
            <button
              className={clsx(css.basicButton, css.arrow, css.arrowLeft)}
              onClick={(e) => {
                handlePrev();
                e.currentTarget.blur();
              }}
            >
              <ChevronLeft />
            </button>
            <img
              key={product.images[currentImageIndex]}
              src={product.images[currentImageIndex]}
              alt={`Product ${currentImageIndex + 1} image`}
              className={css.image}
            />
            <button
              className={clsx(css.basicButton, css.arrow, css.arrowRight)}
              onClick={(e) => {
                handleNext();
                e.currentTarget.blur();
              }}
            >
              <ChevronRight />
            </button>
          </div>

          <div className={css.mainInfo}>
            <h1>{product.name}</h1>
            <p className={css.price}>${product.price}</p>
            <p>{product.description}</p>
          </div>

          {selectedColor && (
            <p className={css.description}>
              <b>Color:</b> {selectedColor.name}
            </p>
          )}

          <div className={css.productOptions}>
            <div>
              <p>Choose color:</p>
              <ul className={css.optionList}>
                {product.colors.map((color) => (
                  <li
                    key={color.id}
                    onClick={() => handleColorSelect(color)}
                    className={`${css.colorOption} ${
                      selectedColor?.id === color.id
                        ? css.colorOptionActive
                        : ''
                    }`}
                  >
                    <img
                      className={css.colorImage}
                      src={color.image}
                      alt={color.name}
                      width="45"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label htmlFor="quantity">Choose quantity:</label>
              <div className={css.optionList}>
                <button
                  className={css.basicButton}
                  onClick={(e) => {
                    handleDecrease();
                    e.currentTarget.blur();
                  }}
                  aria-label="Decrease quantity"
                >
                  <Minus />
                </button>
                <input
                  type="text"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleChange}
                  className={css.quantityInput}
                />
                <button
                  className={css.basicButton}
                  onClick={(e) => {
                    handleIncrease();
                    e.currentTarget.blur();
                  }}
                  aria-label="Increase quantity"
                >
                  <Plus />
                </button>
              </div>
            </div>
            <button
              className={clsx(css.basicButton, css.cartButton)}
              onClick={(e) => {
                handleAddToCart();
                e.currentTarget.blur();
              }}
            >
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
