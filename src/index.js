const {program} = require('commander')
const {PortChecker} = require('./PortChecker')

program.version('1.0.0')

program.option('-h, --host <host>', 'Set the hostaddress')
program.option('-p, --print-offline', 'Print the offline ports also', false)
program.option('-min, --min-port <port>', 'Set the start port')
program.option('-max, --max-port <port>', 'Set the end port')

program.parse(process.argv)

const options = program.opts();

PortChecker.checkHost({
    host: options.host,
    logOffline: options.printOffline,
    minPort: options.minPort,
    maxPort: options.maxPort
})
