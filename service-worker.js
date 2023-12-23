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
    "revision": "c1e58868599c6ef831fc2b3f3fbb7621"
  },
  {
    "url": "assets/css/0.styles.baa501a4.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/add_project.7a9b6c2a.png",
    "revision": "7a9b6c2af6e032fe29d026f2776b1168"
  },
  {
    "url": "assets/img/get_project_id_Invalid_project_id.47cde480.png",
    "revision": "47cde480a2592cdb9ee8acf23d403d4b"
  },
  {
    "url": "assets/img/get_project_id_no_project_with_such_id.5b2e4a15.png",
    "revision": "5b2e4a1517ba569701c53560892e4600"
  },
  {
    "url": "assets/img/get_project_id.ed311044.png",
    "revision": "ed3110443c81af52f6d7ea4e062a5328"
  },
  {
    "url": "assets/img/get_projects.e7bae362.png",
    "revision": "e7bae3623a34af1acd934cd345ccd788"
  },
  {
    "url": "assets/img/get_user_id_invalid_user_id.331ece46.png",
    "revision": "331ece4612469a5b716a21387b4442dd"
  },
  {
    "url": "assets/img/get_user_id_no_user_with_such_id.9f3360e6.png",
    "revision": "9f3360e62fb1ce90b2c3fc0383a191de"
  },
  {
    "url": "assets/img/get_user_id.ecf901e9.png",
    "revision": "ecf901e923fb56bcf62e7573895c7653"
  },
  {
    "url": "assets/img/get_user_login_no_user_with_such_login.3c6b003b.png",
    "revision": "3c6b003b07dfba1deb3b737d7211866b"
  },
  {
    "url": "assets/img/get_user_login.66ea4dbb.png",
    "revision": "66ea4dbbecc1d495fad83c169244d33d"
  },
  {
    "url": "assets/img/get_users.72b6ce8d.png",
    "revision": "72b6ce8d62c8ffc86c7a8b3e6a952a69"
  },
  {
    "url": "assets/img/project_add_test.24d8cf13.png",
    "revision": "24d8cf13661818f43bde750a48534fc2"
  },
  {
    "url": "assets/img/project_delete_id_invalid_project_id.14bfda6b.png",
    "revision": "14bfda6b125ed38c9e2298ee6febda37"
  },
  {
    "url": "assets/img/project_delete_id_nothing_to_delete.69c23ebf.png",
    "revision": "69c23ebfbb43b0ea3f524d837779cbab"
  },
  {
    "url": "assets/img/project_delete_id_test.19926344.png",
    "revision": "199263440473a6283b869bc26fd305bc"
  },
  {
    "url": "assets/img/project_delete_id.0935689a.png",
    "revision": "0935689aad8bebfb501adae4524fd745"
  },
  {
    "url": "assets/img/project_update_invalid_amount_of_keys.9fdac64c.png",
    "revision": "9fdac64cad5e53fe91be55ece5e9defd"
  },
  {
    "url": "assets/img/project_update_invalid_project_id.7be38dcf.png",
    "revision": "7be38dcfd466105f98440bc5a75772a3"
  },
  {
    "url": "assets/img/project_update_nothing_to_update.25d2eff8.png",
    "revision": "25d2eff8aaf42fcb26d76e21f9fab9fa"
  },
  {
    "url": "assets/img/project_update_test.a3d6c233.png",
    "revision": "a3d6c233aa87a268e325138fd1074c8a"
  },
  {
    "url": "assets/img/project_update.3b22a92a.png",
    "revision": "3b22a92ac434e51acca85a91f615c014"
  },
  {
    "url": "assets/img/Run_server.2980945a.png",
    "revision": "2980945a8372b95d757cf2584874ceaf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_add_conflict.15a6c640.png",
    "revision": "15a6c640b02cf1c81828b089eb28b7e2"
  },
  {
    "url": "assets/img/user_add_invalid_amount_of_keys.6d0052e5.png",
    "revision": "6d0052e52a7ba1a67c5f8bdb7dbac21c"
  },
  {
    "url": "assets/img/user_add_invalid_role.a5c760e0.png",
    "revision": "a5c760e0a62ad90cf2aa7f6661d1cebf"
  },
  {
    "url": "assets/img/user_add_test.1616807d.png",
    "revision": "1616807de488a72bb67d8c1f690c3ac4"
  },
  {
    "url": "assets/img/user_add.1bd21b2e.png",
    "revision": "1bd21b2eec6f663f45e36c90ac23e452"
  },
  {
    "url": "assets/img/user_delete_id_invalid_user_id.0b7e5d33.png",
    "revision": "0b7e5d336eaa3cc31c471142fc7b1e0e"
  },
  {
    "url": "assets/img/user_delete_id_nothing_to_delete.9e6e470d.png",
    "revision": "9e6e470dbb849590fe01f6561d97dfec"
  },
  {
    "url": "assets/img/user_delete_id_test.514e6dc2.png",
    "revision": "514e6dc2b1f6c1d89897ca7d2af446ee"
  },
  {
    "url": "assets/img/user_delete_id.88924d9f.png",
    "revision": "88924d9f043cd0ad48a1ba7bcca5c607"
  },
  {
    "url": "assets/img/user_update_conflict.0d43559e.png",
    "revision": "0d43559e63b86769f8c42b2cebe738c6"
  },
  {
    "url": "assets/img/user_update_invalid_amount_of_keys.5dea73d8.png",
    "revision": "5dea73d8d5a904e7564a52da5217c7b3"
  },
  {
    "url": "assets/img/user_update_invalid_user_id.6ea040b9.png",
    "revision": "6ea040b95d876f6496d50b999163ed7c"
  },
  {
    "url": "assets/img/user_update_nothing_to_update.28034cbe.png",
    "revision": "28034cbef8ae18cc871d08ae7f704508"
  },
  {
    "url": "assets/img/user_update_test.0b73c0ca.png",
    "revision": "0b73c0ca100e06fe0923d5e22f67ef28"
  },
  {
    "url": "assets/img/user_update.b6237574.png",
    "revision": "b6237574ef83fa5b7d7277390e4d899f"
  },
  {
    "url": "assets/js/10.85b5ebd1.js",
    "revision": "c0585b6e0e0ffa3dff06b98b039b9699"
  },
  {
    "url": "assets/js/11.e003351a.js",
    "revision": "1115691fe16c10d6d4848056e68f7378"
  },
  {
    "url": "assets/js/12.83a58a47.js",
    "revision": "b64c90691a395470f9ced0cb85695f56"
  },
  {
    "url": "assets/js/13.2607473b.js",
    "revision": "e37f1a4ca23e757c9434ffbcbf347de3"
  },
  {
    "url": "assets/js/14.bcb7b952.js",
    "revision": "e02fd44ab673a5d2f21fbf94f84d9b00"
  },
  {
    "url": "assets/js/15.8ff7ab99.js",
    "revision": "e0c36a4e3c6910b9c8d0e42f80101c59"
  },
  {
    "url": "assets/js/16.5d21fc26.js",
    "revision": "e11b5e9704f939fd01278321d12a8c60"
  },
  {
    "url": "assets/js/17.7e1e5565.js",
    "revision": "e5c0db08b761a6445141568279740705"
  },
  {
    "url": "assets/js/18.579fc5d7.js",
    "revision": "1d7b0a35ca0c79dfe53dbe1b5a58fb09"
  },
  {
    "url": "assets/js/19.2d14b70f.js",
    "revision": "dd555a8f5e536d6c2b892061fe61a03d"
  },
  {
    "url": "assets/js/2.c105fe61.js",
    "revision": "a0537e7e8293409034a817bdef4a484b"
  },
  {
    "url": "assets/js/20.ddb084cd.js",
    "revision": "3c0c52ee9c3208946d1760145c8f14df"
  },
  {
    "url": "assets/js/21.412c61fc.js",
    "revision": "63d8bd2f087ed50ffdbb50f35ea0e26e"
  },
  {
    "url": "assets/js/22.f22cd44d.js",
    "revision": "46e6bd8926e2e5a0541656564133d120"
  },
  {
    "url": "assets/js/23.3ad9f572.js",
    "revision": "2a0ffddd26e4ff5f1f132f660d01ae20"
  },
  {
    "url": "assets/js/24.6951b6e9.js",
    "revision": "a035f70a3ba63ec303cb7e4681bdaf61"
  },
  {
    "url": "assets/js/26.4294363b.js",
    "revision": "4666ac8ac8f3f92bbaae43a076a6f97c"
  },
  {
    "url": "assets/js/3.dd150460.js",
    "revision": "ff2adda0f7d0c89332580db846894ce2"
  },
  {
    "url": "assets/js/4.bfcfe808.js",
    "revision": "2d11208637218824e29f394d072fd052"
  },
  {
    "url": "assets/js/5.04757928.js",
    "revision": "f41f7b124c1f465e0e8dee664d044572"
  },
  {
    "url": "assets/js/6.514cddef.js",
    "revision": "af7556ebed52374c4b053cb9a928ee63"
  },
  {
    "url": "assets/js/7.69a2f1aa.js",
    "revision": "22d8daecf813add9eaadc0a4497fbd0b"
  },
  {
    "url": "assets/js/8.14e7180a.js",
    "revision": "1e95a91817d537d22f24b5c672945919"
  },
  {
    "url": "assets/js/9.766b215f.js",
    "revision": "b3a41903c5de1c74476b443081dc08da"
  },
  {
    "url": "assets/js/app.6d06048e.js",
    "revision": "42a6091fdaf8a0e0ceb9dcd1bf2ed076"
  },
  {
    "url": "conclusion/index.html",
    "revision": "27046339b0f422daa24b73152066f4bf"
  },
  {
    "url": "design/index.html",
    "revision": "53d22b242946bda047f4d8f7b4f1d492"
  },
  {
    "url": "index.html",
    "revision": "45af4864bc2161c41daecd275f594ffc"
  },
  {
    "url": "intro/index.html",
    "revision": "317a3776c1d32fc6f040859b51dfe278"
  },
  {
    "url": "requirements/index.html",
    "revision": "24c5e1e50e017386c03ca81d03bb016f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "af7449192278a28e9e8739338a930baa"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ec0c4ec170cde7f0021d9bc76cc7de0e"
  },
  {
    "url": "software/index.html",
    "revision": "d42fee8ee0a29f8d5b2376b77e3d345e"
  },
  {
    "url": "test/index.html",
    "revision": "da51fd1254b44b954228bf8be71c0562"
  },
  {
    "url": "use cases/index.html",
    "revision": "0e17a22a31af5e36f4f3089df57856d5"
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
