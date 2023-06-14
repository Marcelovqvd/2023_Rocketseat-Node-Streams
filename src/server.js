import http from 'node:http'

const server = http.createServer((req, res) => {
 return req.pipe(process.stdout)
})

server.listen(3333)