/**
 * SW: Install (APP SHELL)
 * El objetivo de este ejercicio es guardar 
 * los recursos de la App Shell en caché en el 
 * evento install del Service Worker.
 * 
 */

self.addEventListener('install', e => {
  const cacheResponse = caches.open('app-cache').then(cache => {
    cache.addAll([
      '/',
      'index.html',
      'pages/page2.html',
      'pages/offline.html',
      'pages/404.html',
      'images/image1.jpg',
      'images/not-image.png',
      'js/app.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
      'https://fonts.googleapis.com/css?family=Quicksand:300,400',
      'https://fonts.googleapis.com/css?family=Lato:400,300',
      'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
    ]);
  });
  e.waitUntil(cacheResponse);
});

/**
 * SW: Install (APP SHELL OPTIMIZADO)
 * El objetivo de este ejercicio es guardar 
 * los recursos de la App Shell en caché en el 
 * evento install del Service Worker.
 * 
 */



/**
 * SW: Activate (BORRAR CACHÉ OBSOLETO)
 * El objetivo de este ejercicio es borrar 
 * los espacios de caché obsoleto cuando editemos 
 * el Service Worker y subamos las versiones de la caché.
 * 
 */

