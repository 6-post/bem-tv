module.exports = function (bh) {
    bh.match('header-text', function (ctx) {
        var level = ctx.param('level') || 1;

        ctx
            .tag('h' + level)
            .mod('level', 'h' + level)
            .content(ctx.param('text'));
    });
};
