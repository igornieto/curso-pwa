/**
 * 1. Registro del Service Worker
 */

// Comprobar que el SW es compatible con el navegador
if (navigator.serviceWorker) {

    // Registro del Service Worker
    navigator.serviceWorker.register("sw.js");

}
