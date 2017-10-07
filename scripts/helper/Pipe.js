/*;(function () {
  function Pipe(options) {
    this.game = options.game
    // 固定的图片宽度
    this.width = 148

    // 切片高度
    this.height = Math.floor(Math.random() * (this.game.canvas.height / 2 - 100) + 100)

    // 所有的管子默认的 x 都是 canvas 画布的宽度，在右边等待移动入场
    this.x = this.game.canvas.width
    // this.x = 100
  }

  var methods = Pipe.prototype

  /!**
   * 管子自己更新自己
   * @return {[type]} [description]
   *!/
  methods.update = function () {
    this.x-=5
    var bird = this.game.bird
    if (bird.x + bird.width / 3 - 20 > this.x && bird.x < this.x + this.width) {
        // 如果小鸟的 y < 管子的y+管子的height则证明撞上了
        if (bird.y <  this.height - 10 || bird.y > this.height + 120) {
          this.game.gameover()
      }
      }
  }

  /!**
   * 管子自己渲染自己
   * @return {[type]} [description]
   *!/
  methods.render = function () {
    // 渲染 pipe1 口朝下的管子
    this.game.ctx.drawImage(this.game.images.pipe1, 0, 1664 - this.height, this.width, this.height, this.x, 0, this.width, this.height)
    // 渲染 pipe2
    this.game.ctx.drawImage(this.game.images.pipe2, 0, 0, this.width, this.game.canvas.height - this.height + 150, this.x,this.height + 150 , this.width, this.game.canvas.height - this.height + 150)

  }

  window.Pipe = Pipe
})()*/
define(function(){
  function Pipe(options) {
    this.game = options.game
    // 固定的图片宽度
    this.width = 148

    // 切片高度
    this.height = Math.floor(Math.random() * (this.game.canvas.height / 2 - 100) + 100)

    // 所有的管子默认的 x 都是 canvas 画布的宽度，在右边等待移动入场
    this.x = this.game.canvas.width
    // this.x = 100
  }

  var methods = Pipe.prototype

  /**
   * 管子自己更新自己
   * @return {[type]} [description]
   */
  methods.update = function () {
    this.x-=5
    var bird = this.game.bird
    if (bird.x + bird.width / 3 - 20 > this.x && bird.x < this.x + this.width) {
      // 如果小鸟的 y < 管子的y+管子的height则证明撞上了
      if (bird.y <  this.height - 10 || bird.y > this.height + 120) {
        this.game.gameover()
      }
    }
  }

  /**
   * 管子自己渲染自己
   * @return {[type]} [description]
   */
  methods.render = function () {
    // 渲染 pipe1 口朝下的管子
    this.game.ctx.drawImage(this.game.images.pipe1, 0, 1664 - this.height, this.width, this.height, this.x, 0, this.width, this.height)
    // 渲染 pipe2
    this.game.ctx.drawImage(this.game.images.pipe2, 0, 0, this.width, this.game.canvas.height - this.height + 150, this.x,this.height + 150 , this.width, this.game.canvas.height - this.height + 150)

  }
  return Pipe;
})