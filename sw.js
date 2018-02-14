"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["index.html","assets/css/main.css","assets/js/main.js","assets/sass/main.scss","images/main.jpg","images/header.jpg"]);
toolbox.router.get("images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});
