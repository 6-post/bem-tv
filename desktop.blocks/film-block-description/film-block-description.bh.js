module.exports = function (bh) {
    bh.match({
        'film-block-description': function(ctx) {
            ctx.attr('cls', ctx.param('cls'));
        },
        'film-block-description__title': function(ctx) {
            ctx.tag('h3')
                .content(ctx.param('text'));
        },
        'film-block-description__text': function(ctx) {
            ctx.tag('p')
                .content(ctx.param('text'));
        }               
    });
};
