// =============================
// 1. Simple promise --> resolve
// =============================

// const multiplier = (number) => {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(number * number);
//         }, 1000);
//     });

//     return promise;
// }

// multiplier(2).then(res => {
//     console.log(res);
// })

// multiplier(2)
//     .then(res => {
//         console.log(res);
//         return multiplier(res);
//     })
//     .then(res => {
//         console.log(res);
//     })

// =======================================
// 2 Simple promise --> resolve and reject
// =======================================

// const multiplier = (number) => {
//     let promise = new Promise((resolve, reject) => {

//         const result = number * number;
//         if (result >= 20) {
//             reject("El número es muy alto");
//         }

//         setTimeout(function () {
//             resolve(result);
//         }, 1000);
//     });

//   return promise;
// }

// multiplier(2).then(res => {
//     console.log(res);
//     return multiplier(res);
// }).then(res => {
//     console.log(res);
//     return multiplier(res);
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })


// =======================================
// 3 Promise.all
// =======================================

// const multiplier = (number) => {
//     let promise = new Promise((resolve, reject) => {

//         const result = number * number;
//         if (result >= 20) {
//             reject("El número es muy alto");
//         }

//         setTimeout(function () {
//             resolve(result);
//         }, 1000);

//     });

//   return promise;
// }

// const multiplierSlow = (number) => {
//     let promise = new Promise((resolve, reject) => {
//         const result = number * number;
//         if (result >= 20) {
//             reject("El número es muy alto");
//         }

//         setTimeout(function () {
//             resolve(result);
//         }, 2000);
//     });

//     return promise;
// }

// Promise.all([multiplier(5), multiplierSlow(4)])
//     .then(res => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log('Error en alguna de las promesas');
//         console.log(error);
//     })

// =======================================
// 4 Promise.race
// =======================================

// const multiplier = (number) => {
//     let promise = new Promise((resolve, reject) => {

//         const result = number * number;
//         if (result >= 20) {
//             reject("El número es muy alto");
//         }

//         setTimeout(function () {
//             resolve(result);
//         }, 1000);

//     });

//   return promise;
// }

// const multiplierSlow = (number) => {
//     let promise = new Promise((resolve, reject) => {
//         const result = number * number;
//         if (result >= 20) {
//             reject("El número es muy alto");
//         }

//         setTimeout(function () {
//             resolve(result);
//         }, 2000);
//     });

//     return promise;
// }

// Promise.race([multiplier(4), multiplierSlow(4)])
//     .then(res => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log('Error en alguna de las promesas');
//         console.log(error);
//     })
