const cacheName = "travelcash";
var cacheAssets = [
    "/",
];


//install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log(`Service-Worker: Caching`);
                cache.addAll(cacheAssets)
                    .then(() => self.skipWaiting())
            })
    );
})


//Activate
self.addEventListener('activate', event => {
    console.log('Service-Worker: Activated');

})


// Fetch
self.addEventListener('fetch', event => {
    console.log('Service-Worker: Fetching');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

