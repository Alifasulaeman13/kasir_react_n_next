import './PageStyles.css'

function PengaturanPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>⚙️ Pengaturan Sistem</h1>
        <p>Konfigurasi aplikasi dan preferensi</p>
      </div>
      
      <div className="page-content">
        <div className="settings-grid">
          <div className="settings-card">
            <h3>🏪 Informasi Toko</h3>
            <div className="setting-item">
              <label>Nama Toko:</label>
              <input type="text" defaultValue="Warung Makan Sederhana" />
            </div>
            <div className="setting-item">
              <label>Alamat:</label>
              <textarea defaultValue="Jl. Raya No. 123, Jakarta"></textarea>
            </div>
            <div className="setting-item">
              <label>Telepon:</label>
              <input type="text" defaultValue="021-1234567" />
            </div>
          </div>
          
          <div className="settings-card">
            <h3>💰 Pengaturan Harga</h3>
            <div className="setting-item">
              <label>Mata Uang:</label>
              <select>
                <option value="IDR">Rupiah (IDR)</option>
                <option value="USD">Dollar (USD)</option>
              </select>
            </div>
            <div className="setting-item">
              <label>PPN (%):</label>
              <input type="number" defaultValue="11" />
            </div>
            <div className="setting-item">
              <label>Pembulatan:</label>
              <select>
                <option value="100">Ke ratusan</option>
                <option value="500">Ke lima ratusan</option>
                <option value="1000">Ke ribuan</option>
              </select>
            </div>
          </div>
          
          <div className="settings-card">
            <h3>🖨️ Printer & Receipt</h3>
            <div className="setting-item">
              <label>Printer:</label>
              <select>
                <option value="thermal">Thermal Printer</option>
                <option value="inkjet">Inkjet Printer</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Ukuran Kertas:</label>
              <select>
                <option value="58mm">58mm</option>
                <option value="80mm">80mm</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Header Receipt:</label>
              <textarea defaultValue="Terima Kasih Atas Kunjungan Anda"></textarea>
            </div>
          </div>
          
          <div className="settings-card">
            <h3>🔐 Keamanan</h3>
            <div className="setting-item">
              <label>Auto Logout (menit):</label>
              <input type="number" defaultValue="30" />
            </div>
            <div className="setting-item">
              <label>Backup Otomatis:</label>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="setting-item">
              <label>Notifikasi Suara:</label>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="btn-primary">💾 Simpan Pengaturan</button>
          <button className="btn-secondary">🔄 Reset Default</button>
          <button className="btn-info">📤 Backup Data</button>
          <button className="btn-warning">🔄 Restart Sistem</button>
        </div>
      </div>
    </div>
  )
}

export default PengaturanPage
