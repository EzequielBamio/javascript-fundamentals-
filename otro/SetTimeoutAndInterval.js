// setTimeout(() => { console.log('SetTimeout... 3seg | 1 execution') }, 3000)
// setInterval(() => { console.log(new Date().toLocaleTimeString() + ' | Infinity execution') }, 3000)

let interval = setInterval(() => {
    { console.log(new Date().toLocaleTimeString() + ' | Infinity execution') }
}, 3000);


setTimeout(() => {

    clearInterval(interval);
    console.log('End interval');

}, 10000);