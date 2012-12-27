# 演示文档

---

<div id="message" class="message">
  输入通关密码
</div>
<div id="hint" class="hint">提示？</div>
<ul id="container" class="container">
  <li>A</li>
  <li>R</li>
  <li>A</li>
  <li>L</li>
  <li>E</li>
</ul>


````javascript
seajs.use(['$', 'popup', 'puzzle'], function($, Popup, puzzle) {
  puzzle.init($('#container li'));

  $(document).keyup(function(e) {
    puzzle.push(e.which);
  });

  setTimeout(function() {
    $('#hint').show();
  },1000);

  new Popup({
    trigger: '#hint',
    align: {
      baseXY: ['100%', '50%'],
      selfXY: [0, '50%']
    },
    template: '<div class="hint-popup">支付宝前端类库</div>'
  }).render();
});

````
