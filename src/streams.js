import { Readable } from 'node:stream';

export class MyReadingStream extends Readable {
  index = 1;

  _read() {
   const i = this.index++;   
   setTimeout(() => {
      if (i < 10) {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}


fetch('http://localhost/3333', {
 method: 'POST',
 body: new MyReadingStream(),
 duplex: 'half'
}).then((data) => {
 console.log(data);
})