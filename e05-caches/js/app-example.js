// =============================
// 1. Comprobar compatibilidad
// =============================

// if (window.caches) {
//     console.log(caches);
// }

// =============================
// 2. Caches.open
// =============================

// if (window.caches) {
//     caches.open('static').then(cache => {
//         console.log(cache);
//     })
// }

// =============================
// 2. Caches.has
// =============================

// if (window.caches) {
//     caches.has('static').then(res => {
//         console.log(res);
//     })
// }

// =============================
// 3. Caches.keys
// =============================

// if (window.caches) {
//     caches.keys().then(res => {
//         console.log(res);
//     })
// }

// =============================
// 4. Caches.delete
// =============================

// if (window.caches) {
//     caches.delete('static').then(res => {
//         console.log(res);
//     })
// }

// =============================
// 4. Methods when caché is open
// =============================

// if (window.caches) {
//     caches.open('static').then(cache => {
//         // 1. add
//         cache.add('/')  
//             .then(() => console.log('Success adding: index.html'));
        
//         // 2. put
//         fetch('/').then(res => {
//             cache.put('/', res)
//                 .then(() => console.log('Success updating: index.html'));
//         })

//         // 3. delete
//         cache.delete('/');

//         // 4. addAll
//         cache.addAll([
//             '/',
//             'images/image1.jpg'
//         ]);
        
//     })

//     // 5. match
//     caches.match('images/image1.jpg').then(res => {
//         console.log(res);
//     })
// }





















// =============================
// 4. Methods when caché is open
// =============================



