CREATE DATABASE IF NOT EXISTS db_klinik;
USE db_klinik;

CREATE TABLE IF NOT EXISTS pasien (
  id INT AUTO_INCREMENT PRIMARY KEY,
  no_rekam_medis VARCHAR(20) NOT NULL UNIQUE,
  nama_lengkap VARCHAR(100) NOT NULL,
  jenis_kelamin ENUM('Laki-laki', 'Perempuan') NOT NULL,
  tanggal_lahir DATE NOT NULL,
  no_telepon VARCHAR(20) NOT NULL,
  alamat TEXT,
  berat_badan DECIMAL(5, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO pasien (no_rekam_medis, nama_lengkap, jenis_kelamin, tanggal_lahir, no_telepon, alamat, berat_badan) VALUES
('RM-0001', 'Wayan Ribek', 'Laki-laki', '2015-05-14', '081888888888', 'Jl. Sanur, Denpasar', 68.00),
('RM-0002', 'Nyoman Siti', 'Perempuan', '2009-11-02', '082888888888', 'Jl. Renon, Denpasar', 55.00),
('RM-0003', 'Ujang', 'Laki-laki', '2001-03-20', '085888888888', 'Jl. Raya Kuta, Badung', 72.25);