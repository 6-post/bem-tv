module.exports = function (bh) {
    bh.match({	
        'film-title': function(ctx) {
            ctx.tag('h1')
				.content(ctx.param('text'));
        },
        'film-title__info': function(ctx) {
            ctx.tag('span')
				.content(ctx.param('text'));
        }       
    });
};