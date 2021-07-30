const colors = require('colors');
const net = require('net');

class PortChecker {

    static async checkHost(props){
        const host = props.host;
        const minPort = props.minPort || 0;
        const maxPort = props.maxPort || 65535;
        const logOffline = props.logOffline || false;
        const output = props.output || console.log;

        for (let i = minPort; i < maxPort; i++) {
            const client = new net.Socket();
            client.connect({
                host: host,
                port: i
            })
            client.setTimeout(3000);
            client.on('connect', () => {
                output("[" + "ONLINE".green + "] " + i)
                client.end()
            })
            client.on('timeout', () => {
                if(logOffline)
                    output("[" + "OFFLINE".red + "] " + i)
                client.end()
            })
            client.on('error', () => {
                if(logOffline)
                    output("[" + "OFFLINE".red + "] " + i)
                client.end()
            })
        }
    }
}

module.exports = {PortChecker}