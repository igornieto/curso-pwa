/**
 * SW: Install (APP SHELL)
 * El objetivo de este ejercicio es guardar 
 * los recursos de la App Shell en caché en el 
 * evento install del Service Worker.
 * 
 */

// self.addEventListener('install', e => {
//   const cacheResponse = caches.open('app-cache').then(cache => {
//     cache.addAll([
//       '/',
//       'index.html',
//       'pages/page2.html',
//       'pages/offline.html',
//       'pages/404.html',
//       'images/image1.jpg',
//       'images/not-image.png',
//       'js/app.js',
//       'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
//       'https://fonts.googleapis.com/css?family=Quicksand:300,400',
//       'https://fonts.googleapis.com/css?family=Lato:400,300',
//       'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
//     ]);
//   });
//   e.waitUntil(cacheResponse);
// });

/**
 * SW: Install (APP SHELL OPTIMIZADO)
 * El objetivo de este ejercicio es guardar 
 * los recursos de la App Shell en caché en el 
 * evento install del Service Worker.
 * 
 */

const CACHE_STATIC = 'static-v2';
const CACHE_INMUTABLE = 'inmutable-v1';


self.addEventListener('install', e => {

  const responseStatic = caches.open(CACHE_STATIC).then(cache => {
    cache.addAll([
      '/',
      'index.html',
      'pages/page2.html',
      'pages/offline.html',
      'pages/404.html',
      'images/image1.jpg',
      'images/not-image.png',
      'js/app.js'
    ]);
  });

  const responseInmutable = caches.open(CACHE_INMUTABLE).then(cache => {
    cache.addAll([
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
      'https://fonts.googleapis.com/css?family=Quicksand:300,400',
      'https://fonts.googleapis.com/css?family=Lato:400,300',
      'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
    ]);
  })


  e.waitUntil(Promise.all([responseStatic, responseInmutable]));
})



/**
 * SW: Activate (BORRAR CACHÉ OBSOLETO)
 * El objetivo de este ejercicio es borrar 
 * los espacios de caché obsoleto cuando editemos 
 * el Service Worker y subamos las versiones de la caché.
 * 
 */

self.addEventListener('activate', e => {
  caches.keys().then(keys => {
    keys.forEach(key => {
      if(key !== CACHE_STATIC && key !== CACHE_INMUTABLE) {
        caches.delete(key);
      }
    })
  })
});

