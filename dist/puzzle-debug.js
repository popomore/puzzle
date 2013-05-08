define("arale/puzzle/1.0.0/puzzle-debug", [ "$-debug", "./puzzle-debug.css" ], function(require, exports, module) {
    var $ = require("$-debug");
    require("./puzzle-debug.css");
    function alphaBeta(obj, frequency) {
        this.obj = $(obj);
        this.frequency = frequency;
    }
    alphaBeta.prototype = {
        twinkle: function(status) {
            if (status) {
                this.start();
            } else {
                this.stop();
            }
            return this;
        },
        start: function() {
            var self = this;
            clearInterval(this.interval);
            this.interval = setInterval(function() {
                if (self.obj.hasClass("underline")) {
                    self.obj.removeClass("underline");
                } else {
                    self.obj.addClass("underline");
                }
            }, this.frequency / 2);
            return this;
        },
        stop: function() {
            clearInterval(this.interval);
            this.obj.addClass("underline");
            return this;
        },
        show: function() {
            this.obj.addClass("show");
            return this;
        },
        hide: function() {
            this.obj.removeClass("show");
            return this;
        }
    };
    var puzzle = {
        arr: [ "a", "r", "a", "l", "e" ],
        index: 0,
        init: function(list) {
            var self = this;
            this.list = [];
            list.each(function(i, o) {
                self.list[i] = new alphaBeta(o, 500);
            });
            this.list[this.index].twinkle(true);
        },
        push: function(key) {
            if (key === 8) this.index--;
            key = String.fromCharCode(key).toLowerCase();
            if (key === this.arr[this.index]) {
                this.list[this.index].twinkle(false).show();
                if (this.index === this.arr.length - 1) {
                    this.complete();
                } else {
                    this.index++;
                    this.list[this.index].twinkle(true);
                }
            }
        },
        complete: function() {
            alert("That's Right!");
        }
    };
    module.exports = puzzle;
});

define("arale/puzzle/1.0.0/puzzle-debug.css", [], function() {
    seajs.importStyle('@font-face{font-family:Marcellus;font-style:normal;font-weight:400;src:local("Marcellus"),local("Marcellus-Regular"),url(http://aralejs.org/static/css/marcellus.woff) format("woff")}.message{font-size:20px;letter-spacing:20px;text-align:center;margin:50px auto;width:250px}.container{margin:0;height:240px;position:relative;font-family:Marcellus,sans-serif;font-size:80px}.container li{float:left;text-align:center;width:10%;margin:5%;overflow:hidden;text-indent:-200px}.container li.underline{border-bottom:10px solid #000}.container li.show{text-indent:0}.hint{cursor:pointer;position:absolute;top:80px;left:60%;display:none}.hint-popup{border:1px solid #ccc;padding:2px 5px;box-shadow:2px 2px 0 #CCC}.hint-popup:before{color:#ccc;font-size:12px;top:5px;left:-7px;position:absolute;content:\'◆\'}.hint-popup:after{color:#fff;font-size:10px;top:5px;left:-4px;position:absolute;content:\'◆\'}');
});
