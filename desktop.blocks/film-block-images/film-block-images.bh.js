module.exports = function (bh) {
    bh.match({
	    'film-block-images__img': function (ctx) {
            ctx
                .tag('img')
                .attrs({
                    src: ctx.param('image'),
                    width: ctx.param('width'),
                    height: ctx.param('height')
                });
        },
		'film-block-images__thumb': function (ctx) {
            ctx
                .tag('img')
                .attrs({
                    src: ctx.param('image'),
                    width: ctx.param('width'),
                    height: ctx.param('height'),
					cls: ctx.param('cls') || []
                });
        }
	});
};
