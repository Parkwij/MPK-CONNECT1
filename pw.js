(function(){
    const _k = ["bX","Br","Mg","Iy","Ng","=="].join("");
    const _x1 = atob(_k);
    Object.defineProperty(window, '_x1', {
        get: function() { return _x1; },
        configurable: false
    });
})();