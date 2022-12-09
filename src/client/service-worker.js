var cacheName = 'geeks-cache-v1';
var cacheAssets = [
    "/",
    "/index.js",
    "styles/app.scss",
    "views/index.html",

];

// // Call install Event
// self.addEventListener("install", (event) => {
//     console.log("Service Worker : Installed!")

//     event.waitUntil(

//         (async () => {
//             try {
//                 cache_obj = await caches.open(cache)
//                 cache_obj.addAll(caching_files)
//             }
//             catch {
//                 console.log("error occured while caching...")
//             }
//         })()
//     )
// })
// // Call install Event
// self.addEventListener('install', e => {
//     // Wait until promise is finished
//     e.waitUntil(
//         caches.open(cacheName)
//             .then(cache => {
//                 console.log(`Service Worker: Caching Files: ${cache}`);
//                 cache.addAll(cacheAssets)
//                     // When everything is set
//                     .then(() => self.skipWaiting())
//             })
//     );
// })


// // Call Activate Event
// self.addEventListener('activate', e => {
//     console.log('Service Worker: Activated');

// })


// // Call Fetch Event
// self.addEventListener('fetch', e => {
//     console.log('Service Worker: Fetching');
//     e.respondWith(
//         caches.match(e.request).then(function (response) {
//             if (response) {
//                 return response;
//             }
//             return fetch(e.request);
//         })
//     );
// });

