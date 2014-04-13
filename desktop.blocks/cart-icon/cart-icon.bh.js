module.exports = function (bh) {
    bh.match({
        'cart-icon': function (ctx) {
            ctx
                .tag('a')
                .attr('href', '/cart')
                .content({
                    elem: 'image',
                    image: ctx.param('image'),
                    width: ctx.param('width'),
                    height: ctx.param('height')
                }, true);
        },
        'cart-icon__image': function (ctx) {
            ctx
                .tag('img')
                .attrs({
                    src: ctx.param('image'),
                    width: ctx.param('width'),
                    height: ctx.param('height')
                });
        }
    });
};
