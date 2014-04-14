modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
	DOM.decl('film-block-images', {
		onSetMod: {
			'js' : {
				'inited' : function() {
					this.bindTo('thumb', 'click', function(e) {
						if (!this.hasMod($(e.currentTarget), 'active')) {
							this.delMod(this.findElem('thumb'), 'active', 'img', '');
							this.setMod($(e.currentTarget), 'active', 'img', '');
							var largeImg = this.findElem('img'),
								thumbs = this.findElem('thumb'),
								actPhoto = e.currentTarget.src.replace("small","large");
							largeImg.attr('src', actPhoto);
						}
					});
				}
			}
		}
	});
	provide(DOM);
});
