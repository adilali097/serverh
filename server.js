const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  const proxy = https.request('https://muhammedadnanv.github.io/aaaa' + req.url, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxy, { end: true });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
