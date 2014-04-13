module.exports = function (bh) {
	bh.match({	
	    'country-choose__city': function(ctx) {
            ctx.tag('span')
				.content(ctx.param('text'));
        },
        'country-choose__region': function(ctx) {
            ctx.tag('buttom')
				.content(ctx.param('text'));
        }
	});
};
