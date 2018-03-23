/* TODO: Connect to GitHub API */
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
/* TODO: Read the Data */
let request = https.request(options, (response) => {

    let body = ''
response.on('data', (data) => {
    body = body + data
})
response.on('end', () => {
    console.log(body)
})
})

request.end()

request.on('error', (e) => {
    console.error(e)
})