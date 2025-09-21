import './PageStyles.css'

function PelangganPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>👤 Manajemen Pelanggan</h1>
        <p>Kelola data pelanggan dan riwayat transaksi</p>
      </div>
      
      <div className="page-content">
        <div className="customer-stats">
          <div className="stat-card">
            <h3>👥 Total Pelanggan</h3>
            <div className="stat-value">1,247</div>
          </div>
          <div className="stat-card">
            <h3>⭐ Pelanggan Aktif</h3>
            <div className="stat-value">892</div>
          </div>
          <div className="stat-card">
            <h3>💎 VIP Members</h3>
            <div className="stat-value">156</div>
          </div>
        </div>
        
        <div className="customer-grid">
          <div className="customer-card vip">
            <div className="customer-avatar">👑</div>
            <div className="customer-info">
              <h3>Budi Santoso</h3>
              <p>VIP Member</p>
              <span className="customer-phone">0812-3456-7890</span>
              <div className="customer-stats">
                <span>Total Belanja: Rp 2,500,000</span>
                <span>Transaksi: 45x</span>
              </div>
            </div>
          </div>
          
          <div className="customer-card">
            <div className="customer-avatar">👩</div>
            <div className="customer-info">
              <h3>Siti Rahayu</h3>
              <p>Regular Customer</p>
              <span className="customer-phone">0813-4567-8901</span>
              <div className="customer-stats">
                <span>Total Belanja: Rp 850,000</span>
                <span>Transaksi: 23x</span>
              </div>
            </div>
          </div>
          
          <div className="customer-card">
            <div className="customer-avatar">👨</div>
            <div className="customer-info">
              <h3>Andi Wijaya</h3>
              <p>Regular Customer</p>
              <span className="customer-phone">0814-5678-9012</span>
              <div className="customer-stats">
                <span>Total Belanja: Rp 1,200,000</span>
                <span>Transaksi: 31x</span>
              </div>
            </div>
          </div>
          
          <div className="customer-card">
            <div className="customer-avatar">👩</div>
            <div className="customer-info">
              <h3>Maya Sari</h3>
              <p>New Customer</p>
              <span className="customer-phone">0815-6789-0123</span>
              <div className="customer-stats">
                <span>Total Belanja: Rp 150,000</span>
                <span>Transaksi: 3x</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="btn-primary">➕ Tambah Pelanggan</button>
          <button className="btn-secondary">✏️ Edit Data</button>
          <button className="btn-info">📊 Riwayat Transaksi</button>
        </div>
      </div>
    </div>
  )
}

export default PelangganPage
