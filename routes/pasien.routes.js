const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasien.controller');

router.get('/pasien', pasienController.getDaftarPasien);

router.get('/pasien/tambah', pasienController.getFormTambah);
router.post('/pasien/tambah', pasienController.postTambahPasien);

router.get('/pasien/edit/:id', pasienController.getFormEdit);
router.post('/pasien/edit/:id', pasienController.postUpdatePasien);

router.post('/pasien/hapus/:id', pasienController.postHapusPasien);

module.exports = router;