module.exports = function (bh) {
    bh.match('cart__text', function (ctx) {
        ctx.content(ctx.param('text'), true);
    });
};
