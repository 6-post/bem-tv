modules.require(['i-bem__dom'], function (DOM) {
    DOM.decl('paragraph', {
        beforeElemSetMod: {
            item: {
                foo: {
                    bar: function () {
                        this.domElem.eq(0).html('FOO!');
                    },
                    '': function () {
                        this.domElem.eq(0).html('BARRR!');
                    }
                }
            }
        },
        onSetMod: {
            js: {
                inited: function () {
                    this.toggleMod(this.findElem('item').eq(0), 'foo', 'bar', '');
                }
            }
        }
    }, {
        // @see http://ru.bem.info/tutorials/bem-js-tutorial/03-live-initialization/
        live: function() {
            this.liveInitOnEvent('click');
        }
    });
});
