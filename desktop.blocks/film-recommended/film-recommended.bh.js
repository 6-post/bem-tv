module.exports = function (bh) {
    bh.match({
		'film-recommended__title': function(ctx) {
			ctx.tag('h3')
				.content(ctx.param('text'));
		},
        'film-recommended__list': function(ctx) {
            ctx.tag('ul');
        },
        'film-recommended__item': function(ctx) {
            ctx.tag('li')
        },
        'film-recommended__link': function (ctx) {
            ctx.tag('a')
               .attr('href', '#');
        },
        'film-recommended__img': function (ctx) {
            ctx.tag('img')
				.attr('src', ctx.param('image'));
			
        },
        'film-recommended__name': function(ctx) {
            ctx.tag('h3')
				.content(ctx.param('text'));
        },
        'film-recommended__name-link': function(ctx) {
            ctx.tag('a')
				.content(ctx.param('text'));
        },
        'film-recommended__date': function(ctx) {
            ctx.tag('span')
				.content(ctx.param('text'));
        },
        'film-recommended__channel': function(ctx) {
            ctx.tag('span')
				.content(ctx.param('text'));
        }
        
    });
};
