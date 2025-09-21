import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Layout Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// Page Components
import ProdukPage from './pages/ProdukPage.jsx'
import KaryawanPage from './pages/KaryawanPage.jsx'
import LaporanPage from './pages/LaporanPage.jsx'
import StokPage from './pages/StokPage.jsx'
import PelangganPage from './pages/PelangganPage.jsx'
import PengaturanPage from './pages/PengaturanPage.jsx'

function MainLayout() {
  const [activeMenu, setActiveMenu] = useState('kasir')

  const renderActivePage = () => {
    switch (activeMenu) {
      case 'kasir':
        return <App />
      case 'produk':
        return <ProdukPage />
      case 'karyawan':
        return <KaryawanPage />
      case 'laporan':
        return <LaporanPage />
      case 'stok':
        return <StokPage />
      case 'pelanggan':
        return <PelangganPage />
      case 'pengaturan':
        return <PengaturanPage />
      default:
        return <App />
    }
  }

  return (
    <div className="app-layout">
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="main-content">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)
