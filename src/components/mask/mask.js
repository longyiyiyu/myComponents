
var $ = require('zepto'), tpl = require('mask/mask.tpl');

function init(opt){
    if (this.isInit) return;
    this.isInit = true;

    this.opts = $.extend({}, this.defaults, opt);

    this.$dom = $(tpl()).appendTo(this.opts.box || document.body);
    bindEvents.call(this);

    return this;
}

function show(){
    if (!this.isInit) return;
    this.$dom.removeClass('z-hide').addClass('z-show');
    this.opts.onShow();
    return this;
}

function hide(){
    if (!this.isInit) return;
    this.$dom.removeClass('z-show').addClass('z-hide');
    this.opts.onHide();
    return this;
}

function toggle(){
    if (!this.isInit) return;
    return this.$dom.hasClass('z-show')?this.hide():this.show();
}

function destroy() {
    this.$dom.remove();
    this.$dom = null;
    return this;
}

function bindEvents(){
    var that = this;
    this.$dom.on('touchmove', function(e){
        e.preventDefault();
    }).on('click', function(e) {
        e.stopPropagation();
        !that.opts.disableHideOnClick && that.hide();
        that.opts.onClick();
    });
}

module.exports = {
    defaults: {
        disableHideOnClick: false,
        onShow: function() {},
        onHide: function() {},
        onClick: function() {}
    },
    show: show,
    hide: hide,
    toggle: toggle,
    init: init,
    destroy: destroy
};
