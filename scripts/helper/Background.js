/*;(function () {
  /!**
   * 背景管理类
   * 每一个背景都可以看成是背景类的实例
   *    house 是背景类的实例
   *    tree  是背景类的实例
   *    地板  是背景类的实例
   *    图片：
   *      宽
   *      高
   *      x坐标
   *      y坐标
   *    背景无缝动画
   *!/
  function Background (options) {
    this.img = options.img
    this.width = options.width
    this.height = options.height
    this.x = options.x
    this.y = options.y
    this.speed = options.speed
    this.game = options.game
    this.amount = parseInt(this.game.canvas.width / this.width) + 1
  }

  var methods = Background.prototype

  methods.update  = function () {
    this.x -= this.speed
    // 在每一次 update 的时候，判断
    if (this.x <= -this.amount * this.width) {
      this.x = 0
    }
  }

  methods.render = function () {
    // this.game.ctx.drawImage(this.img, this.x, this.y)
    // this.game.ctx.drawImage(this.img, this.x + this.width, this.y)
    // this.game.ctx.drawImage(this.img, this.x + this.width * 2, this.y)
    for (var i = 0; i < this.amount * 2; i++) {
      this.game.ctx.drawImage(this.img, this.x + this.width * i, this.y)
    }
    for(var i = 0; i < 255; i++){
      this.game.ctx.beginPath();
      this.game.ctx.strokeStyle = "rgb("+i+",255,255)";
      this.game.ctx.moveTo(0,i);
      this.game.ctx.lineTo(900,i);
      this.game.ctx.stroke();
    }
  }

  window.Background = Background
})()*/
define(function() {
  function Background (options) {
    this.img = options.img
    this.width = options.width
    this.height = options.height
    this.x = options.x
    this.y = options.y
    this.speed = options.speed
    this.game = options.game
    this.amount = parseInt(this.game.canvas.width / this.width) + 1
  }

  var methods = Background.prototype

  methods.update  = function () {
    this.x -= this.speed
    // 在每一次 update 的时候，判断
    if (this.x <= -this.amount * this.width) {
      this.x = 0
    }
  }

  methods.render = function () {
    // this.game.ctx.drawImage(this.img, this.x, this.y)
    // this.game.ctx.drawImage(this.img, this.x + this.width, this.y)
    // this.game.ctx.drawImage(this.img, this.x + this.width * 2, this.y)
    for (var i = 0; i < this.amount * 2; i++) {
      this.game.ctx.drawImage(this.img, this.x + this.width * i, this.y)
    }
    for(var i = 0; i < 255; i++){
      this.game.ctx.beginPath();
      this.game.ctx.strokeStyle = "rgb("+i+",255,255)";
      this.game.ctx.moveTo(0,i);
      this.game.ctx.lineTo(900,i);
      this.game.ctx.stroke();
    }
  }
  return Background;
})
