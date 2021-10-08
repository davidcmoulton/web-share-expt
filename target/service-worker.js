const staticCacheName = "pwa";

const handleInstall = (e) => {
  e.waitUntil(
    caches.open(staticCacheName)
      .then((cache) => cache.addAll(["/"]))
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
