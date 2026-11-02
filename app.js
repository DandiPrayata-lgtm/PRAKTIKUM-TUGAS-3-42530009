const express = require('express');
require('dotenv').config();

const db = require('./config/database');
const pasienRoutes = require('./routes/pasien.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.redirect('/pasien'));
app.use('/', pasienRoutes);

db.query('SELECT 1 + 1 AS result')
  .then(() => {
    console.log('[DATABASE] Terhubung ke MySQL Pool secara aman.');
    app.listen(PORT, () => console.log('[SERVER] Aktif di http://localhost:' + PORT));
  })
  .catch(err => {
    console.error('[DATABASE ERROR] Gagal terhubung ke MySQL:', err.message);
  });