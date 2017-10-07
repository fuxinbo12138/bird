/*;
(function () {
  function Bird(options) {
    this.img = options.img
    this.width = options.width
    this.height = options.height
    this.x = options.x
    this.y = options.y
    this.game = options.game

    // 小鸟扑棱扑棱的精灵图状态
    // 取值范围是 0 1 2
    this.frameStat = 0

    // 小鸟飞行的帧动画间隔时间
    this.flyTime = new Date

    // flyStat 飞行状态，0 表示下，1 表示上
    // 默认是 0 表示下落的状态
    // 当我点击游戏区域画布的时候，让这个 flyStat 变为 1 表示上升的状态
    this.flyStat = 0
    this.downY = 0

    // 小鸟的旋转角度
    this.rotate = 0

    // 小鸟下落的速度
    this.downSpeed = 0

    this.init()
  }

  var methods = Bird.prototype

  methods.init = function () {
    this.game.canvas.onmousedown = (function () {
      // 鼠标点击游戏区域画布的时候，由下落变为上升
      this.downY = 0
      this.flyStat = 1
      this.rotate = - 25
    }).bind(this)
  }

  methods.update = function () {
    if (new Date() - this.flyTime >= 200) {
      this.frameStat++
      this.frameStat === 3 && (this.frameStat = 0)
      this.flyTime = new Date()
    }
    if (this.flyStat === 0) {
      // 0 表示下落状态
      this.downSpeed += 0.4
      this.rotate += 2
    } else if (this.flyStat === 1) {
      // 1 表示上升状态
      this.downY++
      // 每次让小鸟往上飞，我就直接让小鸟的速度 -
      this.downSpeed = -10 + this.downY
      // -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0
      if (this.downSpeed >= 0) {
        // 上升结束，飞行状态变为下落
        this.flyStat = 0
      }
    }
    this.y += this.downSpeed

    if (this.y >= this.game.canvas.height - 80) {
      this.game.gameover()
    }
  }

  methods.render = function () {
    this.game.ctx.save()
    this.game.ctx.translate(this.x, this.y)
    this.game.ctx.rotate(Math.PI / 180 * this.rotate)
    this.game.ctx.drawImage(this.img, this.width / 3 * this.frameStat, 0, this.width / 3, this.height, -24, -24, this.width / 3, this.height)
    this.game.ctx.restore()
  }

  window.Bird = Bird
})()*/
define(function(){
  function Bird(options) {
    this.img = options.img
    this.width = options.width
    this.height = options.height
    this.x = options.x
    this.y = options.y
    this.game = options.game

    // 小鸟扑棱扑棱的精灵图状态
    // 取值范围是 0 1 2
    this.frameStat = 0

    // 小鸟飞行的帧动画间隔时间
    this.flyTime = new Date

    // flyStat 飞行状态，0 表示下，1 表示上
    // 默认是 0 表示下落的状态
    // 当我点击游戏区域画布的时候，让这个 flyStat 变为 1 表示上升的状态
    this.flyStat = 0
    this.downY = 0

    // 小鸟的旋转角度
    this.rotate = 0

    // 小鸟下落的速度
    this.downSpeed = 0

    this.init()
  }

  var methods = Bird.prototype

  methods.init = function () {
    this.game.canvas.onmousedown = (function () {
      // 鼠标点击游戏区域画布的时候，由下落变为上升
      this.downY = 0
      this.flyStat = 1
      this.rotate = - 25
    }).bind(this)
  }

  methods.update = function () {
    if (new Date() - this.flyTime >= 200) {
      this.frameStat++
      this.frameStat === 3 && (this.frameStat = 0)
      this.flyTime = new Date()
    }
    if (this.flyStat === 0) {
      // 0 表示下落状态
      this.downSpeed += 0.4
      this.rotate += 2
    } else if (this.flyStat === 1) {
      // 1 表示上升状态
      this.downY++
      // 每次让小鸟往上飞，我就直接让小鸟的速度 -
      this.downSpeed = -10 + this.downY
      // -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0
      if (this.downSpeed >= 0) {
        // 上升结束，飞行状态变为下落
        this.flyStat = 0
      }
    }
    this.y += this.downSpeed

    if (this.y >= this.game.canvas.height - 80) {
      this.game.gameover()
    }
  }

  methods.render = function () {
    this.game.ctx.save()
    this.game.ctx.translate(this.x, this.y)
    this.game.ctx.rotate(Math.PI / 180 * this.rotate)
    this.game.ctx.drawImage(this.img, this.width / 3 * this.frameStat, 0, this.width / 3, this.height, -24, -24, this.width / 3, this.height)
    this.game.ctx.restore()
  }
  return Bird;
})
