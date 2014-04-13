module.exports = function (bh) {
    bh.match({
        paragraph: function (ctx) {
            var newContent = ctx.content().map(function (text) {
                return {
                    elem: 'item',
                    text: text
                };
            });

            ctx.content(newContent, true);
        },
        paragraph__item: function (ctx) {
            ctx
                .tag('p')
                .content(ctx.param('text'));
        }
    });
};
