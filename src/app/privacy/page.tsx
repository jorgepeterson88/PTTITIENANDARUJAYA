'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-lg font-bold text-emerald-800">PT TITIEN ANDARU JAYA</h1>
                <p className="text-xs text-gray-600">Privacy Policy</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-emerald-100 rounded-full">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600">
              PT TITIEN ANDARU JAYA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-emerald-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Selamat datang di PT TITIEN ANDARU JAYA. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
                </p>
                <p className="text-gray-700">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-emerald-600" />
                  Pengumpulan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-gray-900">Informasi yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Data Identifikasi Pribadi:</strong> Nama lengkap, alamat email, nomor telepon, alamat lengkap</li>
                  <li><strong>Data Perusahaan:</strong> Nama perusahaan, jabatan, informasi bisnis</li>
                  <li><strong>Data Transaksi:</strong> Riwayat pembelian, produk yang dipesan, metode pembayaran</li>
                  <li><strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda menggunakan layanan kami</li>
                  <li><strong>Data Teknis:</strong> Alamat IP, browser, perangkat, informasi lokasi</li>
                </ul>
                
                <h3 className="font-semibold text-gray-900 mt-4">Cara Kami Mengumpulkan Data:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Formulir pendaftaran dan kontak di website kami</li>
                  <li>Komunikasi langsung melalui email atau telepon</li>
                  <li>Transaksi bisnis dan pesanan produk</li>
                  <li>Cookies dan teknologi pelacakan lainnya</li>
                  <li>Analitik dan monitoring website</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-emerald-600" />
                  Penggunaan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Kami menggunakan data pribadi Anda untuk tujuan berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Layanan Pelanggan:</strong> Menangani permintaan dan pertanyaan Anda</li>
                  <li><strong>Transaksi Bisnis:</strong> Memproses pesanan dan pembayaran</li>
                  <li><strong>Marketing:</strong> Mengirim informasi produk dan penawaran khusus</li>
                  <li><strong>Penyempurnaan Layanan:</strong> Menganalisis data untuk meningkatkan layanan</li>
                  <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan</li>
                  <li><strong>Keamanan:</strong> Melindungi dari penipuan dan penyalahgunaan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Kami menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi data pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke data pribadi untuk staf yang berwenang</li>
                  <li>Firewall dan sistem keamanan canggih</li>
                  <li>Backup data teratur dan aman</li>
                  <li>Audit keamanan berkala</li>
                  <li>Pelatihan staf tentang perlindungan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>Berbagi Data dengan Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda dengan pihak ketiga untuk tujuan marketing tanpa persetujuan Anda. Kami hanya akan membagi data dalam situasi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu kami menyediakan layanan (misalnya, pengiriman, pembayaran)</li>
                  <li><strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum atau perintah pengadilan</li>
                  <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                  <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Hak Anda sebagai Pengguna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Sebagai pengguna, Anda memiliki hak-hak berikut terkait data pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Pembatasan:</strong> Membatasi pengolahan data pribadi Anda</li>
                  <li><strong>Portabilitas:</strong> Meminta transfer data ke pihak ketiga</li>
                  <li><strong>Penolakan:</strong> Menolak pengolahan data untuk tujuan tertentu</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Kebijakan Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                  <li><strong>Cookies Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                  <li><strong>Cookies Marketing:</strong> Digunakan untuk menampilkan iklan yang relevan</li>
                </ul>
                <p className="text-gray-700">
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi kami, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">PT TITIEN ANDARU JAYA</p>
                  <p className="text-gray-700">Email: privacy@titienandarujaya.com</p>
                  <p className="text-gray-700">Telepon: 0877-2988-7794</p>
                  <p className="text-gray-700">
                    Alamat: RUKO MONROE NO 60 KAHURIPAN NIRWANA VILLAGE, Kel. Sumput, Kec. Sidoarjo, Kab. Sidoarjo, Prov. Jawa Timur 61252
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Pembaruan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan hukum yang berlaku. Kami akan memberitahu Anda tentang perubahan signifikan melalui email atau pemberitahuan di website kami.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Tanggal berlaku:</strong> 1 Januari 2024<br/>
                  <strong>Pembaruan terakhir:</strong> 1 Januari 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}