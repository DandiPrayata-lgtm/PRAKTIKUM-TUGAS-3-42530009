# Keterangan Tugas

Praktikum 3, 7. Tugas 3 Terstruktur Mata Kuliah Pemrograman Web (MK11): Sistem Manajemen Master Entitas Terintegrasi MySQL dan Prepared Statements.

Aplikasi ini dibuat dengan Node.js, Express, dan EJS. Data disimpan di MySQL melalui connection pool, dengan arsitektur MVC (semua query SQL berada di folder `models/`) dan seluruh query memakai Prepared Statements (placeholder `?`). Kredensial database disimpan di berkas `.env`, dengan contoh pengisian pada `.env.example`.

# Identitas

- **Nama:** [I Made Dandi Prayata Ardana]
- **NIM:** [42530009]
- **Kelas:** [Pemograman WEB]

# Keterangan Klinik

Klinik yang saya buat bernama **KLINIK MAKMUR JAYA**. Aplikasi ini dipakai untuk mengelola master data pasien klinik, yaitu nomor rekam medis, nama lengkap, jenis kelamin, tanggal lahir, nomor telepon, alamat, dan berat badan.

Fitur yang tersedia:

- Menampilkan daftar pasien dalam bentuk tabel
- Menambah pasien baru
- Mengubah data pasien
- Menghapus pasien dengan dialog konfirmasi
- Mencari pasien berdasarkan nama