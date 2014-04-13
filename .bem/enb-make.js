module.exports = function(config) {
    config.setLanguages(["ru", "en"]);
    config.mode("development", function() {

    });
    config.mode("production", function() {

    });

    config.node("desktop.bundles/index", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            require("enb/techs/bemdecl-from-bemjson"),
            require("enb/techs/deps-old"),
            require("enb/techs/files"),
            require("enb/techs/css"),
            [ require("enb/techs/browser-js"), { target: '?.js'} ],
            [ require("bh/techs/bh-server"), { jsAttrName: 'data-bem', jsAttrScheme: 'json' } ],
            require("enb/techs/html-from-bemjson")
        ]);
        nodeConfig.addTargets(["?.html", "?.css", "?.js"]);

        function getLevels() {
            return [
                {"path":"bem-core/common.blocks","check":true},
                {"path":"bem-core/desktop.blocks","check":true},
                {"path":"desktop.blocks","check":true}
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
}

// module.exports = function (config) {
//     config.node('pages/index', function (nodeConfig) {
//         nodeConfig.addTechs([
//             require('enb/techs/bemdecl-from-bemjson')
//             [ require('enb/techs/levels'), { levels: getLevels(config) } ],
//             [ require('enb/techs/file-provider'), { target: '?.bemdecl.js' } ],
//             require('enb/techs/deps-old'),
//             require('enb/techs/files'),
//             require('enb/techs/js'),
//             require('enb/techs/css'),
//             [ require('enb/techs/file-copy'), { sourceTarget: '?.js', destTarget: '_?.js' } ],
//             [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '_?.css' } ]
//         ]);

//         nodeConfig.addTargets(['_?.js', '_?.css']);
//     });
// };

// function getLevels(config) {
//     return [
//       { path: 'bem-core/common.blocks', check: false },
//       { path: 'bem-core/desktop.blocks', check: false },
//       // 'common.blocks',
//       'desktop.blocks'
//     ].map(function(levelPath) { return config.resolvePath(levelPath); });
// }
