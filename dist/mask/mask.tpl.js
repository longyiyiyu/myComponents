define('mask/mask.tpl', function(require, exports, module){ return function (it, opt) {
    it = it || {};
    with(it) {
        var _$out_= [];
        _$out_.push('<div class="mask"></div>');
      return _$out_.join('');
    }
} 
});