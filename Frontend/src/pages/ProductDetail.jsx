import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { Buffer } from 'buffer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${id}/getProduct`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    // Get the current cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const existingItem = storedCart.find(item => item._id === product._id);
    let updatedCart;

    if (existingItem) {
      // If the product exists, update the quantity
      updatedCart = storedCart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the product doesn't exist, add it with quantity 1
      updatedCart = [...storedCart, { ...product, quantity: 1 }];
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Navigate to the cart page
    navigate('/cart');
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <h1 className="product-title">{product.name}</h1>
        <div className="rating-price">
          <span className="rating">{'★'.repeat(product.rating)} ({product.reviewCount} reviews)</span>
          <div className="price-section">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="discounted-price">${product.price}</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="product-images">
        {product?.image?.data&&<img src={`data:image/png;base64,${Buffer.from(product.image.data).toString('base64')}`} alt="Product" className="main-image" />}
          <div className="thumbnails">
            <img src="https://via.placeholder.com/80x80" alt="Thumbnail 1" className="thumbnail" />
            <img src="https://via.placeholder.com/80x80" alt="Thumbnail 2" className="thumbnail" />
            <img src="https://via.placeholder.com/80x80" alt="Thumbnail 3" className="thumbnail" />
          </div>
        </div>

        <div className="product-options">
          <div className="option">
            <label>Price:</label>
            <span>${product.price}</span>
          </div>
          <div className="option">
            <label>Negotiable:</label>
            <span>Yes</span>
          </div>
          <div className="option">
            <label>Color:</label>
            <select>
              <option>Rose Mauve</option>
              <option>Black</option>
              <option>White</option>
            </select>
          </div>
          <div className="option">
            <label>Size:</label>
            <select>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="option">
            <label>Material:</label>
            <span>Cotton</span>
          </div>
          <div className="option">
            <label>Design:</label>
            <span>Modern Nice</span>
          </div>
          <div className="option">
            <label>Warranty:</label>
            <span>2 Years Warranty</span>
          </div>
          <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>

      <div className="product-description">
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>

      <div className="related-products">
        <h2>You May Also Like</h2>
        <div className="related-items">
          <div className="related-item">
            <img src="https://via.placeholder.com/150x150" alt="Related Product 1" />
            <p>Men's Blazer Shirt</p>
            <span>$55.00</span>
          </div>
          <div className="related-item">
            <img src="https://via.placeholder.com/150x150" alt="Related Product 2" />
            <p>Men's Short Sleeve</p>
            <span>$45.00</span>
          </div>
          <div className="related-item">
            <img src="https://via.placeholder.com/150x150" alt="Related Product 3" />
            <p>Apple Watch Ultra</p>
            <span>$799.00</span>
          </div>
        </div>
      </div>

      <div className="discount-banner">
        <p>Super Discount on More Than 100 USD</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
