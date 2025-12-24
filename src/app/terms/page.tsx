'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
                <p className="text-xs text-gray-600">Terms and Conditions</p>
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
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              Syarat dan ketentuan penggunaan layanan PT TITIEN ANDARU JAYA.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-emerald-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Selamat datang di PT TITIEN ANDARU JAYA. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, termasuk website, produk, dan layanan yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
                <p className="text-gray-700">
                  Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan gunakan layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card>
              <CardHeader>
                <CardTitle>Definisi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Dalam Syarat dan Ketentuan ini, istilah-istilah berikut memiliki makna sebagai berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>"Perusahaan"</strong> merujuk pada PT TITIEN ANDARU JAYA</li>
                  <li><strong>"Pelanggan"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</li>
                  <li><strong>"Produk"</strong> merujuk pada bahan makanan dan produk yang kami sediakan</li>
                  <li><strong>"Layanan"</strong> merujuk pada semua layanan yang kami sediakan, termasuk penjualan, pengiriman, dan dukungan pelanggan</li>
                  <li><strong>"Website"</strong> merujuk pada situs web resmi PT TITIEN ANDARU JAYA</li>
                  <li><strong>"Pesanan"</strong> merujuk pada permintaan pembelian produk dari Pelanggan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  Layanan Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-gray-900">Produk yang Kami Sediakan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Bahan baku kering untuk industri makanan</li>
                  <li>Bahan baku basah untuk kebutuhan kuliner</li>
                  <li>Produk olahan siap pakai</li>
                  <li>Konsultasi mengenai kebutuhan bahan makanan industri</li>
                </ul>
                
                <h3 className="font-semibold text-gray-900 mt-4">Standar Kualitas:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Semua produk memenuhi standar keamanan pangan Indonesia</li>
                  <li>Produk memiliki sertifikat halal yang valid</li>
                  <li>Kualitas produk terjamin dan sesuai spesifikasi</li>
                  <li>Kedaluwarsa produk yang jelas dan terjamin</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ordering */}
            <Card>
              <CardHeader>
                <CardTitle>Proses Pemesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-gray-900">Cara Pemesanan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pemesanan dapat dilakukan melalui website, telepon, atau email</li>
                  <li>Pelanggan harus memberikan informasi yang lengkap dan akurat</li>
                  <li>Pesanan akan dikonfirmasi sebelum diproses</li>
                  <li>Perusahaan berhak menolak pesanan jika diperlukan</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-4">Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pembayaran dapat dilakukan melalui transfer bank atau tunai</li>
                  <li>Harga yang tercantum adalah harga belum termasuk PPN</li>
                  <li>Pembayaran harus diselesaikan sesuai kesepakatan</li>
                  <li>Biaya pengiriman ditanggung oleh pembeli</li>
                </ul>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card>
              <CardHeader>
                <CardTitle>Pengiriman</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-gray-900">Ketentuan Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pengiriman dilakukan setelah pembayaran dikonfirmasi</li>
                  <li>Waktu pengiriman tergantung pada lokasi dan ketersediaan produk</li>
                  <li>Perusahaan tidak bertanggung jawab atas keterlambatan yang disebabkan oleh pihak ketiga</li>
                  <li>Pelanggan harus memeriksa kondisi produk saat diterima</li>
                  <li>Klaim kerusakan harus disampaikan maksimal 24 jam setelah penerimaan</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-4">Biaya Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Biaya pengiriman dihitung berdasarkan jarak dan berat produk</li>
                  <li>Untuk pembelian dalam jumlah tertentu, pengiriman gratis</li>
                  <li>Biaya tambahan mungkin berlaku untuk daerah terpencil</li>
                </ul>
              </CardContent>
            </Card>

            {/* Returns */}
            <Card>
              <CardHeader>
                <CardTitle>Kebijakan Pengembalian</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-gray-900">Syarat Pengembalian:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Produk dapat dikembalikan jika cacat atau tidak sesuai spesifikasi</li>
                  <li>Pengembalian harus disertai dengan bukti pembelian</li>
                  <li>Produk harus dalam kondisi utuh dan belum dibuka</li>
                  <li>Pengembalian tidak berlaku untuk produk yang sudah kedaluwarsa</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-4">Proses Pengembalian:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Hubungi layanan pelanggan dalam 24 jam setelah penerimaan</li>
                  <li>Sertakan foto produk yang bermasalah</li>
                  <li>Perusahaan akan melakukan verifikasi dalam 2 hari kerja</li>
                  <li>Penggantian atau pengembalian dana akan diproses setelah verifikasi</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Semua konten di website kami, termasuk tetapi tidak terbatas pada teks, gambar, logo, dan desain, dilindungi oleh hak kekayaan intelektual PT TITIEN ANDARU JAYA.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan konten kami tanpa izin tertulis</li>
                  <li>Nama "PT TITIEN ANDARU JAYA" dan logo kami adalah merek dagang terdaftar</li>
                  <li>Pelanggaran hak kekayaan intelektual akan ditindak sesuai hukum yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-emerald-600" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  PT TITIEN ANDARU JAYA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan data atau keuntungan yang disebabkan oleh penggunaan layanan kami</li>
                  <li>Kerusakan yang disebabkan oleh penggunaan produk yang tidak sesuai</li>
                  <li>Keterlambatan pengiriman yang disebabkan oleh force majeure</li>
                  <li>Ketersediaan produk yang terbatas</li>
                </ul>
                
                <p className="text-gray-700 mt-4">
                  Tanggung jawab maksimum kami terbatas pada nilai pembelian produk yang bersangkutan.
                </p>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>Privasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Kami berkomitmen untuk melindungi privasi Anda. Informasi pribadi yang Anda berikan akan digunakan sesuai dengan Kebijakan Privasi kami. Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data sesuai kebijakan tersebut.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>Terminasi Layanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  PT TITIEN ANDARU JAYA berhak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Menghentikan layanan kepada pelanggan yang melanggar syarat dan ketentuan</li>
                  <li>Membatasi akses ke website atau layanan kami</li>
                  <li>Mengubah atau menghentikan layanan kapan saja dengan pemberitahuan sebelumnya</li>
                </ul>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>Hukum yang Berlaku</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan diselesaikan melalui negosiasi terlebih dahulu. Jika tidak mencapai kesepakatan, sengketa akan diselesaikan melalui pengadilan yang berwenang di Sidoarjo, Jawa Timur.
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardHeader>
                <CardTitle>Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  PT TITIEN ANDARU JAYA berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku efektif setelah dipublikasikan di website kami. Penggunaan layanan kami setelah perubahan menunjukkan persetujuan Anda terhadap syarat dan ketentuan yang diperbarui.
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
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">PT TITIEN ANDARU JAYA</p>
                  <p className="text-gray-700">Email: legal@titienandarujaya.com</p>
                  <p className="text-gray-700">Telepon: 0877-2988-7794</p>
                  <p className="text-gray-700">
                    Alamat: RUKO MONROE NO 60 KAHURIPAN NIRWANA VILLAGE, Kel. Sumput, Kec. Sidoarjo, Kab. Sidoarjo, Prov. Jawa Timur 61252
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Effective Date */}
            <Card>
              <CardHeader>
                <CardTitle>Tanggal Berlaku</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
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