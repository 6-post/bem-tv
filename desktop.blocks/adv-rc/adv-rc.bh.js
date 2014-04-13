module.exports = function (bh) {
    bh.match('adv-rc', function (ctx) {
        ctx
            .tag('img')
            .attrs({
                height: 45,
                border: 0,
                width: 120,
                src: ctx.param('url'),
                alt: 'Royal Canin - корма для кошек и собак'
            });
    });
};
