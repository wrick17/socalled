const mainCache = "dtc-cache";
const fontCache = "dtc-font-cache";

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(mainCache).then(function(cache) {
      return cache.addAll([
        '/',
        '/dist/style.css',
        '/dist/bundle.js',
        '/images/minion.jpg',
        '/images/donkeyKong.jpg',
        '/images/pacman2.png',
        '/images/dbarrel.png',
        '/images/ramp.png'
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  const requestURL = new URL(event.request.url);

  if (requestURL.hostname === "fonts.gstatic.com" || requestURL.hostname === "fonts.googleapis.com") {
    event.respondWith(returnFromCacheOrFetch(event.request, fontCache));
  } else if (/^\/images.*\.(jpg|png)$/.test(requestURL.pathname)) {
    event.respondWith(returnFromCacheOrFetch(event.request, mainCache));
  } else {
    event.respondWith(returnFromCacheOrFetch(event.request, mainCache));
  }
});

function timeoutRequest(request) {
  var timeoutPromise = new Promise(function(resolve) {
    setTimeout(resolve, 500);
  });

  var load = fetch(request);

  return Promise.race([timeoutPromise, load]).then(function(winner) {
    if (winner instanceof Response) {
      return winner;
    } else {
      return new Response('');
    }
  });
}

function returnWebpOrOriginal(request) {
  let supportsWebp = false;

  if (request.headers.has('accept')) {
    supportsWebp = request.headers.get('accept').includes('webp');
  }

  if (supportsWebp) {
    const webpUrl = request.url.replace(/(jpg|png)$/, "webp");
    return fetch(webpUrl).then(function(response) {
      return response.status === 404 ? fetch(request) : response;
    });
  } else {
    return fetch(request);
  }
}

function returnFromCacheOrFetch(request, cacheName) {
  return cacheAndMatch(request, mainCache).then(function([cache, cacheResponse]) {
    const fetchPromise = fetch(request).then(function(fetchResponse) {
      cache.put(request, fetchResponse.clone());
      return fetchResponse;
    });
    return cacheResponse || fetchPromise;
  });
}

function cacheAndMatch(request, cacheName) {
  let cachePromise = caches.open(cacheName);
  let matchPromise = cachePromise.then(function(cache) {
    return cache.match(request);
  });
  return Promise.all([cachePromise, matchPromise]);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
