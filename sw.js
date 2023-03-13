// Menambahkan event listener untuk event 'install'
self.addEventListener('install', function (event) {
    console.log('Service worker telah diinstal');

    // Menunggu sampai semua file yang diperlukan di-cache sebelum service worker diaktifkan
    event.waitUntil(
        caches.open('cache-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js',
                '/image.png'
            ]);
        })
    );
});

// Menambahkan event listener untuk event 'fetch'
self.addEventListener('fetch', function (event) {
    console.log('Memuat: ', event.request.url);

    // Mengecek apakah sudah ada cache untuk request tersebut
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Mengembalikan response dari cache jika sudah ada
            if (response) {
                console.log('Memuat dari cache: ', event.request.url);
                return response;
            }

            // Jika belum ada di cache, melakukan fetch dari server
            console.log('Memuat dari server: ', event.request.url);
            return fetch(event.request);
        })
    );
});
