import { Readable } from 'node:stream'

class OneToHundred extends Readable {
        index = 1
    
    _read() {

    setTimeout(() => {
        const i = this.index++
            
            if (i > 100) {
                this.push(null)
            } else {
                this.push(String(i))
            }
        }, 1000);
    }
        
}

new OneToHundred().pipe(process.stdout)