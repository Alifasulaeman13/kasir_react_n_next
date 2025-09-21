import './PageStyles.css'

function StokPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>📋 Manajemen Stok</h1>
        <p>Pantau dan kelola persediaan barang</p>
      </div>
      
      <div className="page-content">
        <div className="stock-alerts">
          <div className="alert-card warning">
            <h3>⚠️ Stok Menipis</h3>
            <p>3 item perlu restock segera</p>
          </div>
          <div className="alert-card danger">
            <h3>🚨 Stok Habis</h3>
            <p>1 item sudah habis</p>
          </div>
        </div>
        
        <div className="stock-grid">
          <div className="stock-card">
            <h3>🍚 Bahan Pokok</h3>
            <div className="stock-list">
              <div className="stock-item">
                <span>Beras</span>
                <span className="stock-quantity low">5 kg</span>
                <span className="stock-status warning">Menipis</span>
              </div>
              <div className="stock-item">
                <span>Minyak Goreng</span>
                <span className="stock-quantity normal">12 liter</span>
                <span className="stock-status normal">Normal</span>
              </div>
              <div className="stock-item">
                <span>Garam</span>
                <span className="stock-quantity low">2 kg</span>
                <span className="stock-status warning">Menipis</span>
              </div>
            </div>
          </div>
          
          <div className="stock-card">
            <h3>🥩 Protein</h3>
            <div className="stock-list">
              <div className="stock-item">
                <span>Ayam</span>
                <span className="stock-quantity normal">8 kg</span>
                <span className="stock-status normal">Normal</span>
              </div>
              <div className="stock-item">
                <span>Daging Sapi</span>
                <span className="stock-quantity low">3 kg</span>
                <span className="stock-status warning">Menipis</span>
              </div>
              <div className="stock-item">
                <span>Ikan</span>
                <span className="stock-quantity empty">0 kg</span>
                <span className="stock-status danger">Habis</span>
              </div>
            </div>
          </div>
          
          <div className="stock-card">
            <h3>🥤 Minuman</h3>
            <div className="stock-list">
              <div className="stock-item">
                <span>Teh Celup</span>
                <span className="stock-quantity normal">50 pcs</span>
                <span className="stock-status normal">Normal</span>
              </div>
              <div className="stock-item">
                <span>Gula</span>
                <span className="stock-quantity normal">15 kg</span>
                <span className="stock-status normal">Normal</span>
              </div>
              <div className="stock-item">
                <span>Jeruk</span>
                <span className="stock-quantity low">8 buah</span>
                <span className="stock-status warning">Menipis</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="btn-primary">📦 Tambah Stok</button>
          <button className="btn-secondary">✏️ Update Stok</button>
          <button className="btn-info">📋 Riwayat Stok</button>
        </div>
      </div>
    </div>
  )
}

export default StokPage
