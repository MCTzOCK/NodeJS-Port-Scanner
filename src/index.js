const {program} = require('commander')
const {PortChecker} = require('./PortChecker')

program.version('1.0.0')

program.option('-h, --host <host>', 'Set the hostaddress')
program.option('-p, --print-offline', 'Print the offline ports also', false)

program.parse(process.argv)

const options = program.opts();

const host = options.host;
const printOfflinePorts = options.printOffline;

PortChecker.checkHost({
    host: host,
    logOffline: printOfflinePorts
})
