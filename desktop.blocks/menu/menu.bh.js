module.exports = function (bh) {
    bh.match({
        'menu': function(ctx) {
            ctx.tag('ul');
        },
        'menu__item': function(ctx) {
            ctx
                .tag('li');

            var text = ctx.param('text');
            var url = ctx.param('url');

            if (text) {
                if (url) {
                    ctx.content({
                        block: 'link',
                        url: url,
                        text: text,
                        cls: ctx.param('cls') || []
                    }, true);
                } else {
                    ctx.content(text);
                }
            }
        }
    });
};
