const express = require('express');
const path    = require('path');

const app = express();
app.set('trust proxy', 1);

// Force HTTPS on Railway
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https')
    return res.redirect(301, 'https://' + req.headers.host + req.url);
  next();
});

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'WaterCycleV2.html'));
});

const PORT = process.env.PORT || 3535;
app.listen(PORT, () => {
  console.log(`WaterCycle running on port ${PORT}`);
});
