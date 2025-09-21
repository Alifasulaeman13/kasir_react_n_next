import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>📊 Statistik Hari Ini</h4>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Transaksi:</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total Penjualan:</span>
              <span className="stat-value">Rp 0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Item Terjual:</span>
              <span className="stat-value">0</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>⚡ Quick Actions</h4>
          <div className="quick-actions">
            <button className="action-btn">📊 Laporan</button>
            <button className="action-btn">📦 Stok</button>
            <button className="action-btn">👤 Pelanggan</button>
            <button className="action-btn">⚙️ Settings</button>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>ℹ️ Info Sistem</h4>
          <div className="system-info">
            <p>Version: 1.0.0</p>
            <p>Status: Online</p>
            <p>Last Update: {new Date().toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Kasir Modern - Sistem Kasir Premium. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
