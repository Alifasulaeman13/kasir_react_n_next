import './PageStyles.css'

function LaporanPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>📊 Laporan & Analisis</h1>
        <p>Pantau performa bisnis dan analisis penjualan</p>
      </div>
      
      <div className="page-content">
        <div className="report-grid">
          <div className="report-card">
            <h3>💰 Penjualan Hari Ini</h3>
            <div className="report-value">Rp 1,250,000</div>
            <div className="report-change positive">+12% dari kemarin</div>
          </div>
          
          <div className="report-card">
            <h3>🛒 Total Transaksi</h3>
            <div className="report-value">24</div>
            <div className="report-change positive">+3 dari kemarin</div>
          </div>
          
          <div className="report-card">
            <h3>📦 Item Terjual</h3>
            <div className="report-value">156</div>
            <div className="report-change positive">+8% dari kemarin</div>
          </div>
          
          <div className="report-card">
            <h3>⭐ Rating Rata-rata</h3>
            <div className="report-value">4.8</div>
            <div className="report-change positive">+0.2 dari kemarin</div>
          </div>
        </div>
        
        <div className="chart-section">
          <div className="chart-card">
            <h3>📈 Grafik Penjualan 7 Hari Terakhir</h3>
            <div className="chart-placeholder">
              <p>📊 Grafik akan ditampilkan di sini</p>
            </div>
          </div>
          
          <div className="chart-card">
            <h3>🏆 Produk Terlaris</h3>
            <div className="top-products">
              <div className="product-rank">
                <span className="rank">1</span>
                <span>Nasi Goreng</span>
                <span>45 terjual</span>
              </div>
              <div className="product-rank">
                <span className="rank">2</span>
                <span>Ayam Bakar</span>
                <span>32 terjual</span>
              </div>
              <div className="product-rank">
                <span className="rank">3</span>
                <span>Es Teh Manis</span>
                <span>28 terjual</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="btn-primary">📄 Export PDF</button>
          <button className="btn-secondary">📊 Export Excel</button>
          <button className="btn-info">📧 Kirim Email</button>
        </div>
      </div>
    </div>
  )
}

export default LaporanPage
