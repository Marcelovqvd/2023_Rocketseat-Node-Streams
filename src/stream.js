import { Readable } from 'node:stream'

export class MyStream extends Readable {
 _read() {
   const buf = Buffer.from('Marcelo')
   this.push(buf)
 }
}

fetch('http://localhost:3333', {
 method: 'POST',
 body: new MyStream(),
 duplex: 'half'
})
