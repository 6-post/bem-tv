module.exports = function (bh) {
    bh.match('link', function (ctx) {
        ctx
            .tag('a')
            .attr('href', ctx.param('url'))
            .content(ctx.param('text'))
            .cls((ctx.param('cls') || []).join(' '))
    });
};
