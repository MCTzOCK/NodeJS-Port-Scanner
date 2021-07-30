# NodeJS Port Scanner
Scan for all open ports on a server

## Using

Run in your terminal: 
``npm i nodejs-port-scanner``

Requirering the module:
```javascript
const {PortChecker} = require('nodejs-port-checker/src/PortChecker')

PortChecker.checkHost({
    host: "example.com", //                     -> the host that will be checked
    minPort: 0, // default 0                    -> them min port number that will be checked
    maxPort: 65535, // default 65535            -> the max port number that will be checked
    logOffline: false, // default false         -> log even ports that are offline
    output: console.log // default console.log  -> the method that will be used as callback
})
```