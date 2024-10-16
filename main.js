const prompt = require('prompt-sync')()

let coins = prompt('pile ou face')

while(coins != 'pile' && coins != 'face'){
    console.log('tu tes gouré')
    coins = prompt('pile ou face')
}

