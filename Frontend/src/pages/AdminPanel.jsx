import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    stock: ''
  });
  const [editProduct, setEditProduct] = useState(null);
  const navigate = useNavigate();

  // Fetch products
  const fetchProducts = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/product/read', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/product/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newProduct)
    });
    if (response.ok) {
      setNewProduct({ name: '', price: '', image: '', description: '', category: '', stock: '' });
      fetchProducts();
    } else {
      const data = await response.json();
      alert(data.error);
    }
  };

  // Update product
  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/product/${editProduct._id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(editProduct)
    });
    if (response.ok) {
      setEditProduct(null);
      fetchProducts();
    } else {
      const data = await response.json();
      alert(data.error);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/product/${id}/delete`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (response.ok) {
      fetchProducts();
    } else {
      const data = await response.json();
      alert(data.error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={() => navigate('/')}>Back to Home</button>
      <h2>Add Product</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Name:</label>
          <input
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Image (Base64):</label>
          <input
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="number"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      <h2>Manage Products</h2>
      {products.map(product => (
        <div key={product._id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          {editProduct?._id === product._id ? (
            <form onSubmit={handleUpdate}>
              <div>
                <label>Name:</label>
                <input
                  value={editProduct.name}
                  onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Price:</label>
                <input
                  type="number"
                  value={editProduct.price}
                  onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                  required
                />
              </div>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>
            </form>
          ) : (
            <>
              <button onClick={() => setEditProduct(product)}>Edit</button>
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;