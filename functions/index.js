require('zone.js/dist/zone-node');
const functions = require('firebase-functions');
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const AppServerModuleNgFactory = require('./dist-server/main.f80cb506d9d3a3a2248a.bundle.js').AppServerModuleNgFactory;
const path = require('path');
const index = require('fs').readFileSync(path.join(__dirname, '.', 'dist/index.html'), 'utf8');
const express = require('express');
const { enableProdMode } = require('@angular/core');
let app = express();

enableProdMode();

app.get('**', function (req, res) {
    console.log('get');
    renderModuleFactory(AppServerModuleNgFactory, {
        url: req.path,
        document: index
    }).then(html => res.status(200).send(html));
})

exports.server = functions.https.onRequest(app);
