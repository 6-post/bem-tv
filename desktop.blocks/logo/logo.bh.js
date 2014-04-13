module.exports = function (bh) {
    bh.match({
        logo: function (ctx) {
            ctx
                .tag('a')
                .attr('href', '/')
                .content({
                    elem: 'image',
                    image: ctx.param('image')
                }, true);
        },
        logo__image: function (ctx) {
            ctx
                .tag('img')
                .attr('src', ctx.param('image'));
        }
    });
};
