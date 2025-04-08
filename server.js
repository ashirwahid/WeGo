const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // This handles all other requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Ensure you listen on PORT
  const PORT = process.env.PORT || 3000; // Fallback to port 3000
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});