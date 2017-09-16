const fs = require('fs');
var glob = require("glob");
const index = fs.readFileSync('./src/index.html', 'utf8');
const path = require('path');
const firebaseConfig = require('./firebaseConfig.js');

glob('./dist-server/styles.*.bundle.css', { nodir: true }, (err, files) => {    
    const bundleName = files[0].split('/').pop();
    const bundleLink = '<link href="' + bundleName + '" rel="stylesheet">';
    const serverIndex1 = index.replace('<!--css-bundle-->', bundleLink);
    const serverIndex = serverIndex1.replace('<!--firebase-config-->', firebaseConfig);
    fs.writeFileSync('./dist-server/index.html', serverIndex);
});


