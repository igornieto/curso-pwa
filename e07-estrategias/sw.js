/**
 * SW: Install (APP SHELL)
 * 
 */

const CACHE_STATIC = 'static-v2';
const CACHE_INMUTABLE = 'inmutable-v1';
const CACHE_DYNAMIC = 'dynamic-v1';
const CACHE_DYNAMIC_LIMIT = 50;


self.addEventListener('install', e => {

  const staticCacheResponse = caches.open(CACHE_STATIC)
    .then(caches => {
      return caches.addAll([
        '/',
        'css/style.css',
        'index.html',
        'pages/page2.html',
        'pages/offline.html',
        'pages/404.html',
        'images/image1.jpg',
        'images/not-image.png',
        'js/app.js',
        'favicon.ico'
      ])
  })

  const inmutableCacheResponse = caches.open(CACHE_INMUTABLE)
    .then(caches => {
      return caches.addAll([
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        'https://fonts.googleapis.com/css?family=Quicksand:300,400',
        'https://fonts.googleapis.com/css?family=Lato:400,300',
        'https://use.fontawesome.com/releases/v5.3.1/css/all.css',

        'https://fonts.gstatic.com/s/quicksand/v22/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
        'https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2'
      ])
  })

  e.waitUntil(Promise.all([staticCacheResponse, inmutableCacheResponse]));

});

/**
 * SW: Activate (BORRAR CACHÉ OBSOLETO)
 */

self.addEventListener('activate', e => {
  caches.keys().then(keys => {
    keys.forEach(key => {
      if(key !== CACHE_STATIC && key !== CACHE_INMUTABLE && key !== CACHE_INMUTABLE) {
        caches.delete(key);
      }
    });
  });
});


