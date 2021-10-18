const staticCacheName = 'app';

const handleInstall = (e) => {
  e.waitUntil(
    caches.open(staticCacheName)
      .then((cache) => cache.addAll(
        [
          './',
          './index.html',
          './share-target.html',
          './share-target.js',
          './images/icon-16x16.png',
          './images/icon-32x32.png',
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
