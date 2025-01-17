let money = 10000;
const buyACar = (car:any)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money>=10000){
                resolve("can buy " + car);
            }
            else {
                reject("cannot buy " + car);
            }
        }, 100)
    })
}

money = 1000;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);

}, error => {
    console.log(error);
});