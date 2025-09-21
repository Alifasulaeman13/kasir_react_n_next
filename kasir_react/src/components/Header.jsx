import { useState } from 'react'
import './Header.css'

function Header({ activeMenu, setActiveMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'kasir', label: '🛒 Kasir', icon: '🛒' },
    { id: 'produk', label: '📦 Produk', icon: '📦' },
    { id: 'laporan', label: '📊 Laporan', icon: '📊' },
    { id: 'stok', label: '📋 Stok', icon: '📋' },
    { id: 'pelanggan', label: '👤 Pelanggan', icon: '👤' },
    { id: 'pengaturan', label: '⚙️ Pengaturan', icon: '⚙️' }
  ]

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="app-title">🛒 Kasir Modern</h1>
          <span className="app-subtitle">Sistem Kasir Premium</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-btn ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Info */}
        <div className="user-info">
          <div className="user-details">
            <span className="user-name">Admin</span>
            <span className="user-role">Kasir</span>
          </div>
          <div className="user-avatar">👤</div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`mobile-nav-btn ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
