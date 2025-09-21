import './PageStyles.css'

function KaryawanPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>👥 Manajemen Karyawan</h1>
        <p>Kelola data karyawan dan akses sistem</p>
      </div>
      
      <div className="page-content">
        <div className="employee-grid">
          <div className="employee-card">
            <div className="employee-avatar">👨‍💼</div>
            <div className="employee-info">
              <h3>Budi Santoso</h3>
              <p>Manager</p>
              <span className="status active">Aktif</span>
            </div>
          </div>
          
          <div className="employee-card">
            <div className="employee-avatar">👩‍💼</div>
            <div className="employee-info">
              <h3>Siti Rahayu</h3>
              <p>Kasir</p>
              <span className="status active">Aktif</span>
            </div>
          </div>
          
          <div className="employee-card">
            <div className="employee-avatar">👨‍🍳</div>
            <div className="employee-info">
              <h3>Andi Wijaya</h3>
              <p>Koki</p>
              <span className="status active">Aktif</span>
            </div>
          </div>
          
          <div className="employee-card">
            <div className="employee-avatar">👩‍🍳</div>
            <div className="employee-info">
              <h3>Maya Sari</h3>
              <p>Pelayan</p>
              <span className="status inactive">Cuti</span>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="btn-primary">➕ Tambah Karyawan</button>
          <button className="btn-secondary">✏️ Edit Data</button>
          <button className="btn-warning">📊 Laporan Absensi</button>
        </div>
      </div>
    </div>
  )
}

export default KaryawanPage
