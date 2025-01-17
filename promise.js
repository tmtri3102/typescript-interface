var money = 10000;
var buyACar = function (car) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("cannot buy " + car);
            }
        }, 100);
    });
};
money = 1000;
var promise = buyACar("Vinfast").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
