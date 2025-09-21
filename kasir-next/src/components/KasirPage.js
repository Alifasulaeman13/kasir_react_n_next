'use client'

import { useState } from 'react'
import './KasirPage.css'

export default function KasirPage() {
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
    { id: 7, name: 'Mie Ayam', price: 12000, category: 'Makanan' },
    { id: 8, name: 'Es Campur', price: 10000, category: 'Minuman' },
    { id: 9, name: 'Pisang Goreng', price: 8000, category: 'Snack' },
    { id: 10, name: 'Kopi Hitam', price: 6000, category: 'Minuman' },
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

  const handleCheckout = () => {
    if (cart.length === 0) return
    
    alert(`Transaksi berhasil!\nTotal: ${formatCurrency(total)}\nItem: ${cart.length} jenis produk`)
    clearCart()
  }

  return (
    <div className="kasir-app">
      <div className="kasir-container">
        {/* Product Menu */}
        <div className="product-section">
          <div className="section-header">
            <h2>🛒 Menu Produk</h2>
            <div className="product-count">
              {products.length} Produk Tersedia
            </div>
          </div>
          
          <div className="category-filter">
            <button className="filter-btn active">Semua</button>
            <button className="filter-btn">Makanan</button>
            <button className="filter-btn">Minuman</button>
            <button className="filter-btn">Snack</button>
          </div>
          
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
              <div className="empty-cart">
                <div className="empty-icon">🛒</div>
                <p>Keranjang kosong</p>
                <small>Pilih produk untuk memulai transaksi</small>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{formatCurrency(item.price)} x {item.quantity}</p>
                    <span className="item-total">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
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
            <button 
              className="checkout-btn" 
              disabled={cart.length === 0}
              onClick={handleCheckout}
            >
              💳 Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
