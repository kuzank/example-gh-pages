/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a01db5a858a7cab3a00eea9e3a97c907"
  },
  {
    "url": "assets/css/0.styles.737c3457.css",
    "revision": "4fb34bfb8ba8811172dc579d61bd7921"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1ec5b278.js",
    "revision": "40bd85a9ccafbb0c9af9342b07d93c07"
  },
  {
    "url": "assets/js/11.1e5f1798.js",
    "revision": "d7a86e27b5bf45d95846d5a3d5f02568"
  },
  {
    "url": "assets/js/4.13fa6c06.js",
    "revision": "85c4942a198a6d412b9b70483f0c360d"
  },
  {
    "url": "assets/js/5.ab19231a.js",
    "revision": "cd10828994da2950fb6f8737880f14a1"
  },
  {
    "url": "assets/js/6.02835ec8.js",
    "revision": "2a7c0dd9d5b855373f63cbabaa57973c"
  },
  {
    "url": "assets/js/7.ac8df731.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.c825dedb.js",
    "revision": "c932d31e1c9bda4a1890244da0c11f28"
  },
  {
    "url": "assets/js/9.bc804cef.js",
    "revision": "dba56b790df879588ee64d979bebe23b"
  },
  {
    "url": "assets/js/app.bb67a8e8.js",
    "revision": "450f1cfbbaabb65a9eec7679d88d60f6"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "catalogue/index.html",
    "revision": "35e50c4aacbe7b6d8082de20c6eb8a79"
  },
  {
    "url": "catalogue/page.html",
    "revision": "17827ac131df7d50431b4d8f3a324847"
  },
  {
    "url": "images/kuzank-logo-100.png",
    "revision": "adce35e100bd853374f972754b77583a"
  },
  {
    "url": "images/kuzank-logo-200.png",
    "revision": "79c3f76308988383ee168efdb3edea7d"
  },
  {
    "url": "images/kuzank-logo.png",
    "revision": "0bc6cc50e3f160b4de69f7326c140263"
  },
  {
    "url": "index.html",
    "revision": "6f00f85926d52fa669da98c44cdc1abe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
