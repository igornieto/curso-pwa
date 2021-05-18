// =============================
// 1. Offline mode basic response
// =============================

self.addEventListener('fetch', e => {
    
  const response = fetch(e.request)
      .then(res => {
          if (res.ok) return res; // <--- Response OK

          return fetch('pages/404.html') // <--- Response Not found
      })
      .catch(err => {
          const offlineText = 'No tienes conexión a internet';
          return new Response(offlineText, {   // <--- Response Offline
              headers: {
                  'Content-Type': 'text/html'
              }
          }); 

      })

  e.respondWith(response);
})


// =============================
// 2. Offline mode return response text/html
// =============================


// self.addEventListener('fetch', e => {
    
//   const response = fetch(e.request)
//       .then(res => {
//           if (res.ok) return res; // <--- Response OK

//           return fetch('pages/404.html') // <--- Response Not found
//       })
//       .catch(err => {
//           const offlineText = 'No tienes conexión a internet';
//           return new Response(`
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
//                 <title>Mi PWA</title>
//             </head>
//             <body>
//             <h1>Modo offline</h1>
//             </body>
//             </html>
//           `, {   // <--- Response Offline
//               headers: {
//                   'Content-Type': 'text/html'
//               }
//           }); 

//       })

//   e.respondWith(response);
// })


// =============================
// 3. Offline mode return file text/html
// =============================

// self.addEventListener('fetch', e => {
    
//     const response = fetch(e.request)
//         .then(res => {
//             if (res.ok) return res;

//             return fetch('pages/404.html');
//         })
//         .catch(err => {
//             // Imposible, no podemos hacer un fetch a la página 
//             // ya que no la tenemos almacenada offline 
//             // requiere una petición http
//             return fetch('pages/offline.html');  
//         })

//     e.respondWith(response);
// })



