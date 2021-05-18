// =============================
// 1. Comprobar compatibilidad con el navegador
// =============================

if(window.caches) {
  // =============================
  // 2. Crear espacio de caché con el nombre 'static'
  // =============================

  caches.open('static').then(cache => {
    // =============================
    // 3. Añadir index.html,  images/image1.jpg y 
    //    images/not-image.png al espacio static
    // =============================
    
    cache.addAll([
      'index.html',
      'images/image1.jpg',
      'images/not-image.png'
    ]);

    // =============================
    // 4. Actualizar el recurso de caché index.html
    // =============================
    fetch('index.html').then(res => {
      cache.put('index.html', res);
    });

    // =============================
    // 5. Actualizar el recurso de caché index.html
    // =============================
    cache.delete('images/image1.jpg');
    
  });

  // =============================
  // 6. Crear un segundo espacio de caché con el nombre 'static-2'
  // =============================

  caches.open('static-2');

  // =============================
  // 7. Pintar en consola todos los nombres de los espacios de caché existentes
  // =============================
  caches.keys().then(keys => {
    console.log(keys);

    // =============================
    // 8. Borrar uno a uno dichos espacios
    // =============================

    keys.forEach(key => {
      caches.delete(key);
    })
  })

}















