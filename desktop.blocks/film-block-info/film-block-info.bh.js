module.exports = function (bh) {
    bh.match({	
        'film-block-info-list': function(ctx) {
            ctx.tag('dl');
        },
        'film-block-info-list__name': function(ctx) {
            ctx.tag('dt')
				.content(ctx.param('text'));
        },
        'film-block-info-list__text': function(ctx) {
            ctx.tag('dd')
				.content(ctx.param('text'));
        },
        'all-actors': function(ctx) {
            ctx.tag('button')
				.content(ctx.param('text'));
        } 		
    });
};
