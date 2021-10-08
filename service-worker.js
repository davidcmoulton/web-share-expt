const staticCacheName = 'pwa';

const handleInstall = (e) => {
  e.waitUntil(
    caches.open(staticCacheName)
      .then((cache) => cache.addAll(
        [
          './target.html',
          './images/icon-192.png',
          './images/icon-512.png',
        ]
      ))
  );
};

const handleFetch = (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request)
      .then((response) => response || fetch((e.request)))
  );
};

self.addEventListener('install', handleInstall);
self.addEventListener('fetch', handleFetch);
