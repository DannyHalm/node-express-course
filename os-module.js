const os = require('os')

// info aboutt current user
const user = os.userInfo()
console.log(user)

//methods returns the system uptime in seconds

console.log(`The system Uptime is ${os.uptime()/(360*24)} days`)
const currentOS= {
    name:os.type(),
    release:os.release(),
    platform:os.platform(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)