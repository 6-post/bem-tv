var fs = require("fs");
var bh = require("bh");
var vm = require("vm");
var bemhtmlFilePath = "desktop.bundles/index/index.bemhtml.js";
var bemJSON = fs.readFileSync("desktop.bundles/index/index.bemjson.js", {encoding: "utf-8"});

var dropRequireCache = require('enb/lib/fs/drop-require-cache');
var enbBuilder = require('enb/lib/server/server-middleware').createBuilder({
    cdir: process.cwd()
});

enbBuilder(bemhtmlFilePath).then(function () {
    var bemhtmlAbsFilePath = process.cwd() + '/' + bemhtmlFilePath;
    dropRequireCache(require, bemhtmlAbsFilePath);

    var bemhtml = require(bemhtmlAbsFilePath);
    var json = vm.runInThisContext(bemJSON);

    console.time("generate time");
    console.log(bemhtml.BEMHTML.apply(json))
    console.timeEnd("generate time");
}, function (err) {
    console.error(err)
});
