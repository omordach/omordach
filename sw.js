"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["index.html","assests/css/main.css","assests/js/main.css","assests/sass/main.scss","images/main.jpg","images/header.jpg"]);
toolbox.router.get("/images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});
