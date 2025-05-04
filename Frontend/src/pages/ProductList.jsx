import React, { useState, useEffect } from 'react';
import './ProductList.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Buffer } from 'buffer';
import { Link, NavLink, useLocation } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    priceRange: { min: '', max: '' },
    condition: 'any',
    rating: 0
  });
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/product/read');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply search filters from URL query parameters
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('search')?.toLowerCase() || '';
    const category = query.get('category') || '';

    // Update filters based on URL query
    setFilters(prev => ({
      ...prev,
      category: category
    }));

    // Filter products based on search term and category
    let updatedProducts = products;

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    }

    if (category) {
      updatedProducts = updatedProducts.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    setFilteredProducts(updatedProducts);
  }, [location.search, products]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [name]: value
      }
    }));
  };

  const applyFilters = () => {
    let updatedProducts = products;

    // Apply category filter
    if (filters.category) {
      updatedProducts = updatedProducts.filter(product =>
        product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Apply brand filter
    if (filters.brand) {
      updatedProducts = updatedProducts.filter(product =>
        product.brand?.toLowerCase() === filters.brand.toLowerCase()
      );
    }

    // Apply price range filter
    if (filters.priceRange.min) {
      updatedProducts = updatedProducts.filter(product =>
        product.price >= parseFloat(filters.priceRange.min)
      );
    }
    if (filters.priceRange.max) {
      updatedProducts = updatedProducts.filter(product =>
        product.price <= parseFloat(filters.priceRange.max)
      );
    }

    // Apply condition filter
    if (filters.condition !== 'any') {
      updatedProducts = updatedProducts.filter(product =>
        product.condition?.toLowerCase() === filters.condition.toLowerCase()
      );
    }

    // Apply rating filter
    if (filters.rating) {
      updatedProducts = updatedProducts.filter(product =>
        product.rating >= parseInt(filters.rating)
      );
    }

    setFilteredProducts(updatedProducts);
  };

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <>
      <Header />
      <Navbar />
      <div className="product-listing-container">
        <div className="filters-section">
          <h2>Category</h2>
          <div className="filter-group">
            {['Mobile accessory', 'Electronics', 'Smartphone', 'Modern tech'].map(category => (
              <label key={category}>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={handleFilterChange}
                />
                {category}
              </label>
            ))}
          </div>

          <h3>Status</h3>
          <div className="filter-group">
            {['Samsung', 'Apple', 'Huawei', 'Phone', 'Lampo', 'Sex of'].map(brand => (
              <label key={brand}>
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={filters.brand === brand}
                  onChange={handleFilterChange}
                />
                {brand}
              </label>
            ))}
          </div>

          <h3>Price range</h3>
          <div className="price-range">
            <input
              type="number"
              name="min"
              placeholder="Min"
              value={filters.priceRange.min}
              onChange={handlePriceChange}
            />
            <span>-</span>
            <input
              type="number"
              name="max"
              placeholder="Max"
              value={filters.priceRange.max}
              onChange={handlePriceChange}
            />
            <button onClick={applyFilters}>Apply</button>
          </div>

          <h3>Condition</h3>
          <div className="filter-group">
            {['Any', 'Rehydrained', 'Brand drive', 'Old Items'].map(condition => (
              <label key={condition}>
                <input
                  type="radio"
                  name="condition"
                  value={condition.toLowerCase()}
                  checked={filters.condition === condition.toLowerCase()}
                  onChange={handleFilterChange}
                />
                {condition}
              </label>
            ))}
          </div>

          <h3>Rating</h3>
          <div className="rating-filter">
            {[5, 4, 3].map(stars => (
              <label key={stars}>
                <input
                  type="radio"
                  name="rating"
                  value={stars}
                  checked={filters.rating === stars}
                  onChange={handleFilterChange}
                />
                {'★'.repeat(stars)}
              </label>
            ))}
          </div>
        </div>

        <div className="products-section">
          <h2>Products</h2>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product._id} className="product-card">
                <NavLink to={`/productdetail/${product._id}`} className="product-link">
                  <div className="product-image">
                    <img
                      src={`data:image/png;base64,${Buffer.from(product.image.data).toString('base64')}`}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="price">
                      {product.originalPrice && (
                        <span className="original-price">${product.originalPrice}</span>
                      )}
                      <span className="current-price">${product.price}</span>
                    </div>
                    <div className="rating">
                      {'★'.repeat(product.rating)}
                      <span>({product.reviewCount} reviews)</span>
                    </div>
                    <p className="shipping">{product.freeShipping ? 'Free Shipping' : ''}</p>
                    <p className="description">{product.description}</p>
                    <p className="seller">Sold by: {product.seller}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductList;