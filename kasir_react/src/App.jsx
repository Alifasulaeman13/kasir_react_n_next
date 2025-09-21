import { useState } from 'react'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  // Sample products data
  const products = [
    { id: 1, name: 'Nasi Goreng', price: 15000, category: 'Makanan' },
    { id: 2, name: 'Ayam Bakar', price: 25000, category: 'Makanan' },
    { id: 3, name: 'Es Teh Manis', price: 5000, category: 'Minuman' },
    { id: 4, name: 'Jus Jeruk', price: 8000, category: 'Minuman' },
    { id: 5, name: 'Kerupuk', price: 3000, category: 'Snack' },
    { id: 6, name: 'Kacang', price: 5000, category: 'Snack' },
  ]

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    setTotal(total + product.price)
  }

  const removeFromCart = (productId) => {
    const item = cart.find(item => item.id === productId)
    if (item.quantity > 1) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ))
    } else {
      setCart(cart.filter(item => item.id !== productId))
    }
    setTotal(total - item.price)
  }

  const clearCart = () => {
    setCart([])
    setTotal(0)
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(amount)
  }

  return (
    <div className="kasir-app">
      <div className="kasir-container">
        {/* Product Menu */}
        <div className="product-section">
          <h2>🛒 Menu Produk</h2>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">{formatCurrency(product.price)}</p>
                </div>
                <button 
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  ➕ Tambah
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="cart-section">
          <div className="cart-header">
            <h2>🛍️ Keranjang Belanja</h2>
            <button className="clear-btn" onClick={clearCart}>
              🗑️ Kosongkan
            </button>
          </div>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Keranjang kosong</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{formatCurrency(item.price)} x {item.quantity}</p>
                  </div>
                  <div className="item-actions">
                    <button 
                      className="quantity-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ➖
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => addToCart(item)}
                    >
                      ➕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart-total">
            <div className="total-row">
              <span>Total:</span>
              <span className="total-amount">{formatCurrency(total)}</span>
            </div>
            <button className="checkout-btn" disabled={cart.length === 0}>
              💳 Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
