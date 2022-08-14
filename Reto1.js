console.log("Mensaje 1");
setTimeout(() => {
    console.log("Mensaje 2");
    setTimeout(() => {
        console.log("Mensaje 3");
    });
}, 3000);