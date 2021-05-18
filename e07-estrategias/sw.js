/**
 * SW: Install (APP SHELL OPTIMIZADO)
 * El objetivo de este ejercicio es guardar 
 * los recursos de la App Shell en caché en el 
 * evento install del Service Worker.
 * 
 */

  const CACHE_STATIC = 'static-v3';
  const CACHE_INMUTABLE = 'inmutable-v2';
  const CACHE_DYNAMIC = 'dynamic-v2';
  const CACHE_LIMIT = 50;

  const cleanCache = (cacheName, numItems) => {
    caches.open(cacheName).then((cache) => {
      return cache.keys().then((keys) => {
        if (keys.length > numItems) {
          cache.delete(keys[0]).then(cleanCache(cacheName, numItems));
        }
      });
    });
  };
 
 
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
       'js/app.js',
       'css/style.css'
     ]);
   });
 
   const responseInmutable = caches.open(CACHE_INMUTABLE).then(cache => {
     cache.addAll([
       'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
       'https://fonts.googleapis.com/css?family=Quicksand:300,400',
       'https://fonts.googleapis.com/css?family=Lato:400,300',
       'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
       'https://fonts.gstatic.com/s/quicksand/v22/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
       'https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2'
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
 


/**
 * SW: Fetch - Estraregias de caché
 */

self.addEventListener('fetch', e => {
  // 1. cache only
  //e.respondWith(caches.match(e.request));
  
  // 2. cache with network fallback 
  // const response = caches.match(e.request).then(res => {
  //   if(res) return res;

  //   return fetch(e.request).then(newResponse => {
  //     caches.open(CACHE_DYNAMIC).then(cache => {
  //       cache.put(e.request, newResponse);
  //     })
  //     return newResponse.clone();
  //   })
  // })

  // e.respondWith(response);

  // 3. network with caché fallback
  // if(e.request.url.includes('fonts')) {
  //   const response = fetch(e.request).then(res => {
  //     console.log(res);
  //     if(!res.ok) return caches.match(e.request);
  
  //     caches.open(CACHE_DYNAMIC)
  //       .then(cache => {
  //         cache.put(e.request, res.clone());
  //         cleanCache(CACHE_DYNAMIC, CACHE_LIMIT);
  //       })
      
  //     return res.clone();
  //   })
  //   .catch(() => {
  //     return caches.match(e.request);
  //   })
  //   e.respondWith(response); 
  // }
  
  // 4. cache with network update

  // const response = caches.open(CACHE_STATIC).then(cache => {
  //   fetch(e.request).then(newResponse => {
  //     cache.put(e.request, newResponse);
  //   })
  //   return cache.match(e.request);
  // })

  // e.respondWith(response);

  if (e.request.url.includes("api.openweathermap.org")) {
    
    const fetchNetworkAndSaveCache = () => {
      return fetch(e.request)
        .then((res) => res.json())
        .then((resJson) => {
          const resJsonWithDate = { ...resJson, date: new Date() };
          const newResponse = new Response(JSON.stringify(resJsonWithDate), {
            headers: { "Content-Type": "application/json" },
          });
          caches.open(CACHE_DYNAMIC).then((cache) => {
            cache.put(e.request, newResponse);
          });
          return newResponse.clone();
        });
    };

    const response = caches.open(CACHE_DYNAMIC).then((cache) => {
      fetchNetworkAndSaveCache();

      return cache.match(e.request).then( res => {
        if(res) return res;
        return fetchNetworkAndSaveCache();
      });
    });

    e.respondWith(response);
  }
})






