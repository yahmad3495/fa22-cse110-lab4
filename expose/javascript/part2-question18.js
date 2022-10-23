function test() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(test, 1000);