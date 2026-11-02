const PasienModel = require('../models/pasien.model');

// SEMUA WAJIB DI ISI (KECUALI ALAMAT)
const dataLengkap = (d) =>
  d.no_rekam_medis && d.nama_lengkap && d.jenis_kelamin && d.tanggal_lahir &&
  d.no_telepon && d.berat_badan;

// READ All
exports.getDaftarPasien = async (req, res) => {
  try {
    const keyword = (req.query.q || '').trim();
    const pasienList = await PasienModel.getAll(keyword);
    res.render('pages/pasien-list', { pageTitle: 'Daftar Pasien', pasienList, keyword });
  } catch (error) {
    console.error('[ERROR getDaftarPasien]:', error);
    res.status(500).send('Gagal mengambil data.');
  }
};

// CREATE MENAMPILKAN FROM KOSONG
exports.getFormTambah = (req, res) => {
  res.render('pages/pasien-form', {
    pageTitle: 'Tambah Pasien',
    formAction: '/pasien/tambah',
    pasien: {}
  });
};

// CREATE SIMPAN DAN REDIRECT
exports.postTambahPasien = async (req, res) => {
  try {
    if (!dataLengkap(req.body)) {
      return res.status(400).send('Seluruh field wajib diisi.');
    }
    await PasienModel.create(req.body);
    console.log('[DATABASE] Pasien "' + req.body.nama_lengkap + '" berhasil di-insert.');
    res.redirect('/pasien');
  } catch (error) {
    console.error('[ERROR postTambahPasien]:', error);
    res.status(500).send('Gagal menyimpan data. Pastikan No. Rekam Medis belum dipakai.');
  }
};

// UPDATE MENAMPILKAN FORM DATA LAMA 
exports.getFormEdit = async (req, res) => {
  try {
    const pasien = await PasienModel.getById(req.params.id);
    if (!pasien) {
      return res.status(404).send('Pasien tidak ditemukan.');
    }
    res.render('pages/pasien-form', {
      pageTitle: 'Edit Pasien',
      formAction: '/pasien/edit/' + pasien.id,
      pasien
    });
  } catch (error) {
    console.error('[ERROR getFormEdit]:', error);
    res.status(500).send('Gagal memuat form edit.');
  }
};

// UPDATE MENYIMPAN PERUBAHAN DAN REDIRECT 
exports.postUpdatePasien = async (req, res) => {
  try {
    if (!dataLengkap(req.body)) {
      return res.status(400).send('Seluruh field wajib diisi.');
    }
    await PasienModel.update(req.params.id, req.body);
    console.log('[DATABASE] Record ID ' + req.params.id + ' berhasil diperbarui.');
    res.redirect('/pasien');
  } catch (error) {
    console.error('[ERROR postUpdatePasien]:', error);
    res.status(500).send('Gagal memperbarui data. Pastikan No. Rekam Medis belum dipakai.');
  }
};

// DELETE
exports.postHapusPasien = async (req, res) => {
  try {
    await PasienModel.delete(req.params.id);
    console.log('[DATABASE] Record ID ' + req.params.id + ' berhasil dihapus.');
    res.redirect('/pasien');
  } catch (error) {
    console.error('[ERROR postHapusPasien]:', error);
    res.status(500).send('Gagal menghapus data.');
  }
};