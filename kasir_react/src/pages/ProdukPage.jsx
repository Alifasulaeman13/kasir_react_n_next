import './PageStyles.css'

function ProdukPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>📦 Manajemen Produk</h1>
        <p>Kelola daftar produk, harga, dan kategori</p>
      </div>
      
      <div className="page-content">
        <div className="content-grid">
          <div className="content-card">
            <h3>🍽️ Makanan</h3>
            <div className="product-list">
              <div className="product-item">
                <span>Nasi Goreng</span>
                <span>Rp 15,000</span>
              </div>
              <div className="product-item">
                <span>Ayam Bakar</span>
                <span>Rp 25,000</span>
              </div>
              <div className="product-item">
                <span>Gado-gado</span>
                <span>Rp 12,000</span>
              </div>
            </div>
          </div>
          
          <div className="content-card">
            <h3>🥤 Minuman</h3>
            <div className="product-list">
              <div className="product-item">
                <span>Es Teh Manis</span>
                <span>Rp 5,000</span>
              </div>
              <div className="product-item">
                <span>Jus Jeruk</span>
                <span>Rp 8,000</span>
              </div>
              <div className="product-item">
                <span>Kopi Hitam</span>
                <span>Rp 6,000</span>
              </div>
            </div>
          </div>
          
          <div className="content-card">
            <h3>🍿 Snack</h3>
            <div className="product-list">
              <div className="product-item">
                <span>Kerupuk</span>
                <span>Rp 3,000</span>
              </div>
              <div className="product-item">
                <span>Kacang</span>
                <span>Rp 5,000</span>
              </div>
              <div className="product-item">
                <span>Pisang Goreng</span>
                <span>Rp 7,000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="btn-primary">➕ Tambah Produk</button>
          <button className="btn-secondary">✏️ Edit Produk</button>
          <button className="btn-danger">🗑️ Hapus Produk</button>
        </div>
      </div>
    </div>
  )
}

export default ProdukPage
