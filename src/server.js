import http from 'node:http';

const server = http.createServer((req, res) => {
 console.log(req);
  res.end(String(req))
});

server.listen(3333, () => console.log('running at 3333'));
