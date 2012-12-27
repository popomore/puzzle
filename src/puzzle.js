define(function(require, exports, module) {

  var $ = require('$');

  require('./puzzle.css');

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
        if (self.obj.hasClass('underline')) {
          self.obj.removeClass('underline');
        } else {
          self.obj.addClass('underline');
        }
      }, this.frequency / 2);
      return this;
    },
    stop: function() {
      clearInterval(this.interval);
      this.obj.addClass('underline');
      return this;
    },
    show: function() {
      this.obj.addClass('show');
      return this;
    },
    hide: function() {
      this.obj.removeClass('show');
      return this;
    }
  };

  var puzzle = {
    arr: ['a', 'r', 'a', 'l', 'e'],
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
      alert('That\'s Right!');
    }
  };

  module.exports = puzzle;
});

