'use client'

import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import KasirPage from './KasirPage'
import './MainLayout.css'

export default function MainLayout() {
  const [activeMenu, setActiveMenu] = useState('kasir')

  const renderContent = () => {
    switch (activeMenu) {
      case 'kasir':
        return <KasirPage />
      case 'produk':
        return (
          <div className="page-placeholder">
            <h2>📦 Manajemen Produk</h2>
            <p>Halaman untuk mengelola produk akan segera hadir...</p>
          </div>
        )
      case 'laporan':
        return (
          <div className="page-placeholder">
            <h2>📊 Laporan Penjualan</h2>
            <p>Halaman laporan akan segera hadir...</p>
          </div>
        )
      case 'stok':
        return (
          <div className="page-placeholder">
            <h2>📋 Manajemen Stok</h2>
            <p>Halaman stok akan segera hadir...</p>
          </div>
        )
      case 'pelanggan':
        return (
          <div className="page-placeholder">
            <h2>👤 Manajemen Pelanggan</h2>
            <p>Halaman pelanggan akan segera hadir...</p>
          </div>
        )
      case 'pengaturan':
        return (
          <div className="page-placeholder">
            <h2>⚙️ Pengaturan Sistem</h2>
            <p>Halaman pengaturan akan segera hadir...</p>
          </div>
        )
      default:
        return <KasirPage />
    }
  }

  return (
    <div className="main-layout">
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="main-content">
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}
