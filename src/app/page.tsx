'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  Package,
  Truck,
  Shield
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert(result.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo-titien.png" 
                alt="PT TITIEN ANDARU JAYA" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-emerald-800">PT TITIEN ANDARU JAYA</h1>
                <p className="text-sm text-gray-600">Industrial Food Materials</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setActiveTab('about')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'about' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Tentang Kami
              </button>
              <button 
                onClick={() => setActiveTab('products')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'products' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Produk
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'contact' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Kontak
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Trusted Since 2020
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Solusi Terpercaya untuk
            <span className="text-emerald-600"> Bahan Makanan Industri</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            PT TITIEN ANDARU JAYA menyediakan bahan makanan berkualitas tinggi untuk kebutuhan industri Anda. 
            Kami berkomitmen untuk memberikan produk terbaik dengan standar keamanan pangan tertinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => setActiveTab('contact')}
            >
              Hubungi Kami
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setActiveTab('products')}
            >
              Lihat Produk
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        {activeTab === 'about' && (
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami?</h3>
              <p className="text-gray-600 mb-6">
                PT TITIEN ANDARU JAYA adalah perusahaan yang bergerak di bidang industri bahan makanan. 
                Kami menyediakan berbagai jenis bahan makanan berkualitas tinggi untuk memenuhi kebutuhan industri kuliner dan makanan di Indonesia.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Produk berkualitas tinggi dengan sertifikat halal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Distribusi tepat waktu dan terpercaya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Harga kompetitif untuk pembelian grosir</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Layanan pelanggan yang responsif</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Berkualitas</h4>
                  <p className="text-sm text-gray-600">Standar kualitas tertinggi</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Truck className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Tepat Waktu</h4>
                  <p className="text-sm text-gray-600">Pengiriman tepat waktu</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Terpercaya</h4>
                  <p className="text-sm text-gray-600">Keamanan terjamin</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Profesional</h4>
                  <p className="text-sm text-gray-600">Tim berpengalaman</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Products Section */}
        {activeTab === 'products' && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Produk Unggulan Kami</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Bahan Baku Kering</CardTitle>
                  <CardDescription>Produk kering berkualitas untuk industri makanan</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Tepung terigu berkualitas</li>
                    <li>• Gula pasir premium</li>
                    <li>• Berbagai macam rempah</li>
                    <li>• Bahan pengawet alami</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Bahan Baku Basah</CardTitle>
                  <CardDescription>Produk segar untuk kebutuhan kuliner</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Sayuran segar pilihan</li>
                    <li>• Buah-buahan berkualitas</li>
                    <li>• Daging dan seafood</li>
                    <li>• Produk susu dan telur</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Produk Olahan</CardTitle>
                  <CardDescription>Produk siap pakai untuk industri makanan</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Bumbu instan premium</li>
                    <li>• Saus dan dressing</li>
                    <li>• Produk beku</li>
                    <li>• Makanan kaleng</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hubungi Kami</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                  <CardDescription>Hubungi kami untuk informasi lebih lanjut</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Alamat</p>
                      <p className="text-sm text-gray-600">
                        RUKO MONROE NO 60 KAHURIPAN NIRWANA VILLAGE<br/>
                        Kel. Sumput, Kec. Sidoarjo<br/>
                        Kab. Sidoarjo, Prov. Jawa Timur<br/>
                        Kode Pos: 61252
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-sm text-gray-600">0877-2988-7794</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">info@titienandarujaya.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Jam Operasional</p>
                      <p className="text-sm text-gray-600">
                        Senin - Jumat: 08:00 - 17:00<br/>
                        Sabtu: 08:00 - 12:00<br/>
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>Isi formulir di bawah untuk menghubungi kami</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Tulis pesan Anda..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <section className="py-16 bg-emerald-600 rounded-2xl text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-emerald-100">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-emerald-100">Produk Variasi</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-emerald-100">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100">Layanan Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo-titien.png" 
                  alt="PT TITIEN ANDARU JAYA" 
                  className="h-8 w-auto"
                />
                <h4 className="font-bold">PT TITIEN ANDARU JAYA</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Solusi terpercaya untuk bahan makanan industri di Indonesia.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Bahan Baku Kering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bahan Baku Basah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Produk Olahan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Perusahaan</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Visi & Misi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Pengembalian</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sertifikat</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PT TITIEN ANDARU JAYA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}