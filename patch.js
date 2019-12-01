#!/usr/bin/env node

module.exports = function (context) {
    var fs = context.requireCordovaModule('fs'),
        path = context.requireCordovaModule('path'),
        platformRoot = path.join(context.opts.projectRoot, 'platforms/android'),
        manifestFile = path.join(platformRoot, 'AndroidManifest.xml');

    if (fs.existsSync(manifestFile)) {
        fs.readFile(manifestFile, 'utf8', function (err, data) {
            if (err) {
                throw new Error('Unable to find AndroidManifest.xml: ' + err);
            }
            fs.writeFile(manifestFile, data, 'utf8', function (err) {
                if (err) throw new Error('Unable to write into AndroidManifest.xml: ' + err);
            });
        });
    }
};
