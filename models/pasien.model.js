const db = require('../config/database');

const PasienModel = {
  // READ All
  getAll: async (keyword) => {
    const sql = "SELECT * FROM pasien WHERE nama_lengkap LIKE CONCAT('%', ?, '%') ORDER BY id ASC";
    const [rows] = await db.query(sql, [keyword]);
    return rows;
  },

  // READ One
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM pasien WHERE id = ?', [id]);
    return rows[0];
  },

  // CREATE
  create: async (d) => {
    const sql = 'INSERT INTO pasien (no_rekam_medis, nama_lengkap, jenis_kelamin, tanggal_lahir, no_telepon, alamat, berat_badan) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(sql, [
      d.no_rekam_medis, d.nama_lengkap, d.jenis_kelamin, d.tanggal_lahir,
      d.no_telepon, d.alamat, d.berat_badan
    ]);
    return result;
  },

  // UPDATE
  update: async (id, d) => {
    const sql = 'UPDATE pasien SET no_rekam_medis = ?, nama_lengkap = ?, jenis_kelamin = ?, tanggal_lahir = ?, no_telepon = ?, alamat = ?, berat_badan = ? WHERE id = ?';
    const [result] = await db.query(sql, [
      d.no_rekam_medis, d.nama_lengkap, d.jenis_kelamin, d.tanggal_lahir,
      d.no_telepon, d.alamat, d.berat_badan, id
    ]);
    return result;
  },

  // DELETE
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM pasien WHERE id = ?', [id]);
    return result;
  }
};

module.exports = PasienModel;