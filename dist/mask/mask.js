define("mask",function(i,s,t){function o(i){return this.isInit?void 0:(this.isInit=!0,this.opts=c.extend({},this.defaults,i),this.$dom=c(u()).appendTo(this.opts.box||document.body),a.call(this),this)}function n(){return this.isInit?(this.$dom.removeClass("z-hide").addClass("z-show"),this.opts.onShow(),this):void 0}function h(){return this.isInit?(this.$dom.removeClass("z-show").addClass("z-hide"),this.opts.onHide(),this):void 0}function e(){return this.isInit?this.$dom.hasClass("z-show")?this.hide():this.show():void 0}function d(){return this.$dom.remove(),this.$dom=null,this}function a(){var i=this;this.$dom.on("touchmove",function(i){i.preventDefault()}).on("click",function(s){s.stopPropagation(),!i.opts.disableHideOnClick&&i.hide(),i.opts.onClick()})}var c=i("zepto"),u=i("mask/mask.tpl");i("mask/mask.async.scss"),t.exports={defaults:{disableHideOnClick:!1,onShow:function(){},onHide:function(){},onClick:function(){}},show:n,hide:h,toggle:e,init:o,destroy:d}});