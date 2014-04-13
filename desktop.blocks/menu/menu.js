modules.require(['i-bem__dom'], function (DOM) {
    DOM.decl('menu', {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    console.log("init", this.domElem[0].outerHTML);

                    this.bindTo('mouseover', function() {
                        this.toggleMod('foo', 'bar');
                    });

                    this.on('custom-evt', function() {
                        console.log("custom event caught");
                    });
                }
            },
            foo: function (modName, modVal, currentModVal) {
                console.log("COME ON!", modName, modVal, currentModVal);
                this.emit('custom-evt');

                this.domElem.append('<li>' + Date.now()+ '</li>')
            }
        }
    }, {
        // @see http://ru.bem.info/tutorials/bem-js-tutorial/03-live-initialization/
        live: function() {
            this.liveInitOnEvent('click');
        }
    });
});
