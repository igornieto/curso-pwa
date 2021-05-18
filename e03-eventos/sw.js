// =============================
// 1. Install event
// =============================

self.addEventListener('install', e => {
  console.log('SW: Proceso de instalación');
});


// =============================
// 2. Activate event
// =============================

self.addEventListener('activate', e => {
  console.log('SW: Service worker activado');
});

// =============================
// 3. Fetch event
// =============================

self.addEventListener('fetch', e => {
  console.log('SW: Evento fetch disparado');
  console.log(e);
});

// =============================
// 4. Sync event
// =============================

self.addEventListener('sync', e => {
  console.log('SW: Evento sync');
  console.log(e);
});

// =============================
// 5. Push event
// =============================

self.addEventListener('push', e => {
  console.log('SW: Evento push');
  console.log(e);
});


// =============================
// 6. Return https://www.wikipedia.org/ page from SW
// =============================

// self.addEventListener('fetch', e => {
//   if(e.request.url.includes('localhost')) {
//     const response = fetch('https://www.wikipedia.org/')
//       .then(res => {
//         if(res.ok) return res;
//         return 'No encontrado';
//       })
//     e.respondWith(response);
//   }
// })


// =============================
// 7. Placeholder image
// =============================

// self.addEventListener('fetch', e => {
//   const imageRegex = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
//   if(imageRegex.test(e.request.url)) {
//     const resImg = fetch(e.request).then(res => {
//       if(res.ok) return res;

//       return fetch('images/not-image.png');
//     })

//     e.respondWith(resImg);
//   }
// })


// =============================
// 8. Return 404 error
// =============================

// self.addEventListener('fetch', e => {
//   const htmlRegex = /[\/.](html)$/i;
//   if(htmlRegex.test(e.request.url)) {
//     const resImg = fetch(e.request).then(res => {
//       if(res.ok) return res;

//       return fetch('pages/404.html');
//     })

//     e.respondWith(resImg);
//   }
// })