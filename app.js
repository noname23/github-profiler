const https = require('https');
const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/sebutsajasayaiman',
    method: 'GET',
    headers:{
        'user-agent': 'nodejs'
    }
}

let request = https.request(options, (result) => {
    console.log('Got Response: ', result.statusCode)
})

request.end()

request.on('error', (e) => {
    console.error(e)
})