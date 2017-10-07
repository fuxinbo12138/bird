/*;(function (Background, Bird) {
  function Game(id) {
    this.timer = null
    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext('2d')
    this.fps = 1000 / 50
    this.images = {}
    this.backgroundList = []
    this.resourcePath = './r.json' // 存储所有资源信息的 json 文件路径

    // 存储所有管子的数组, 没间隔一定时间就会自动 new 出一根管子
    this.pipeList = []

    // 记录下 new 出管子的时间
    this.pipeTime = new Date()
    this.init()
  }

  var methods = Game.prototype

  methods.init = function () {
    // 加载资源，资源加载成功，run 启动游戏
    this.loadImges(function () {
      // 所有图片加载成功之后，调用 run 开始游戏
      // 在游戏运行之前，构造一个房子背景实例

      // 资源加载成功，初始化所有的背景实例
      this.initBackgroundList()

      // 加载小鸟
      this.bird = new Bird({
        img: this.images.bird,
        width: 255,
        height: 60,
        x: 100,
        y: 100,
        game: this
      })

      // 然后开始运行游戏
      this.run()
    }.bind(this))
  }

  /!**
   * 初始化所有的背景实例，统一放到 Game 的 backgroundList 数组中
   * 注意：该方法一定要在 loadImages 加载资源之后调用才有用
   * @return {[type]} [description]
   *!/
  methods.initBackgroundList = function () {
    this.backgroundList.push(new Background({
      img: this.images.house,
      width: 300,
      height: 256,
      x: 0,
      y: 250,
      speed: 1,
      game: this
    }))

    this.backgroundList.push(new Background({
      img: this.images.land,
      width: 48,
      height: 48,
      x: 0,
      y: this.canvas.height - 48,
      speed: 3,
      game: this
    }))

    this.backgroundList.push(new Background({
      img: this.images.tree,
      width: 300,
      height: 216,
      x: 0,
      y: this.canvas.height - 48 - 210,
      speed: 2,
      game: this
    }))
  }

  /!**
   * 加载所有图片资源
   * @return {[type]} [description]
   *!/
  methods.loadImges = function (callback) {
    var self = this
    // 1. 记载得到 r.json 数据
    // 2. 遍历 r.json 中的 images
    //    new 出 Image
    //    当 img onload 把图片添加到 Game 的 images 中
    //    当所有的 img 都加载结束了，Game 的 images 中就挂载了一堆的图片资源对象
    var xhr = new XMLHttpRequest()
    xhr.open('get', this.resourcePath)
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText)

        // 遍历加载所有的图片资源
        // 当所有的图片资源记载成功，调用 callback 进行下一步操作
        var count = 0 // 这个是加载数量的标记，没成功一个

        data.images.forEach(function (item) {
          var img = new Image()
          img.src = item.src
          img.onload = function () {
            // 把这个 img 添加到 Game 的 images 中
            self.images[item.name] = img
            count++
            if (count === data.images.length) {
              // console.log('所有图片资源都 load 完毕了')
              // console.log(Object.keys(self.images).length)
              callback()
            }
          }
        })
      }
    }
  }

  methods.run = function () {
    this.timer = window.setInterval(function () {
      this.mainLoop()
    }.bind(this), this.fps)
  }

  /!**
   * 游戏主循环，每 20 ms 执行一次
   * @return {[type]} [description]
   *!/
  methods.mainLoop = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // 这样写太繁琐
    // this.house.update()
    // this.house.render()
    // this.tree.update()
    // this.tree.render()

    // 我们把所有的背景对象否统一的放到一个背景数组中
    // 然后在每帧动画执行的时候，循环数组中所有的背景实例，让其 更新、渲染 自己
    this.backgroundList.forEach(function (item) {
      item.update()
      item.render()
    })

    // 间隔一定时间 new 出一个管子，存放到管子数组中
    if (new Date() - this.pipeTime >= 1200) {
      this.pipeList.push(new Pipe({
        game: this
      }))
      this.pipeTime = new Date()
    }

    // 动画每帧都循环所有的管子，让管子自己 update、render
    this.pipeList.forEach(function (item) {
      item.update()
      item.render()
    })

    this.bird.update()
    this.bird.render()
  }

  methods.gameover = function (argument) {
    window.clearInterval(this.timer)
  }

  window.Game = Game
})(Background, Bird)*/
define(['helper/Bird','helper/Background','helper/Pipe'],function(Bird, Background,Pipe){
  function Game() {
    this.timer = null
    this.canvas = document.getElementById("canvas")
    this.ctx = this.canvas.getContext('2d')
    this.fps = 1000 / 50
    this.images = {}
    this.backgroundList = []
    this.resourcePath = './r.json' // 存储所有资源信息的 json 文件路径

    // 存储所有管子的数组, 没间隔一定时间就会自动 new 出一根管子
    this.pipeList = []

    // 记录下 new 出管子的时间
    this.pipeTime = new Date()
    this.init()
  }

  var methods = Game.prototype

  methods.init = function () {
    // 加载资源，资源加载成功，run 启动游戏
    this.loadImges(function () {
      // 所有图片加载成功之后，调用 run 开始游戏
      // 在游戏运行之前，构造一个房子背景实例

      // 资源加载成功，初始化所有的背景实例
      this.initBackgroundList()

      // 加载小鸟
      this.bird = new Bird({
        img: this.images.bird,
        width: 255,
        height: 60,
        x: 100,
        y: 100,
        game: this
      })

      // 然后开始运行游戏
      this.run()
    }.bind(this))
  }

  /**
   * 初始化所有的背景实例，统一放到 Game 的 backgroundList 数组中
   * 注意：该方法一定要在 loadImages 加载资源之后调用才有用
   * @return {[type]} [description]
   */
  methods.initBackgroundList = function () {
    this.backgroundList.push(new Background({
      img: this.images.house,
      width: 300,
      height: 256,
      x: 0,
      y: 250,
      speed: 1,
      game: this
    }))

    this.backgroundList.push(new Background({
      img: this.images.land,
      width: 48,
      height: 48,
      x: 0,
      y: this.canvas.height - 48,
      speed: 3,
      game: this
    }))

    this.backgroundList.push(new Background({
      img: this.images.tree,
      width: 300,
      height: 216,
      x: 0,
      y: this.canvas.height - 48 - 210,
      speed: 2,
      game: this
    }))
  }

  /**
   * 加载所有图片资源
   * @return {[type]} [description]
   */
  methods.loadImges = function (callback) {
    var self = this
    // 1. 记载得到 r.json 数据
    // 2. 遍历 r.json 中的 images
    //    new 出 Image
    //    当 img onload 把图片添加到 Game 的 images 中
    //    当所有的 img 都加载结束了，Game 的 images 中就挂载了一堆的图片资源对象
    var xhr = new XMLHttpRequest()
    xhr.open('get', this.resourcePath)
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText)

        // 遍历加载所有的图片资源
        // 当所有的图片资源记载成功，调用 callback 进行下一步操作
        var count = 0 // 这个是加载数量的标记，没成功一个

        data.images.forEach(function (item) {
          var img = new Image()
          img.src = item.src
          img.onload = function () {
            // 把这个 img 添加到 Game 的 images 中
            self.images[item.name] = img
            count++
            if (count === data.images.length) {
              // console.log('所有图片资源都 load 完毕了')
              // console.log(Object.keys(self.images).length)
              callback()
            }
          }
        })
      }
    }
  }

  methods.run = function () {
    this.timer = window.setInterval(function () {
      this.mainLoop()
    }.bind(this), this.fps)
  }

  /**
   * 游戏主循环，每 20 ms 执行一次
   * @return {[type]} [description]
   */
  methods.mainLoop = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // 这样写太繁琐
    // this.house.update()
    // this.house.render()
    // this.tree.update()
    // this.tree.render()

    // 我们把所有的背景对象否统一的放到一个背景数组中
    // 然后在每帧动画执行的时候，循环数组中所有的背景实例，让其 更新、渲染 自己
    this.backgroundList.forEach(function (item) {
      item.update()
      item.render()
    })

    // 间隔一定时间 new 出一个管子，存放到管子数组中
    if (new Date() - this.pipeTime >= 1200) {
      this.pipeList.push(new Pipe({
        game: this
      }))
      this.pipeTime = new Date()
    }

    // 动画每帧都循环所有的管子，让管子自己 update、render
    this.pipeList.forEach(function (item) {
      item.update()
      item.render()
    })

    this.bird.update()
    this.bird.render()
  }

  methods.gameover = function (argument) {
    window.clearInterval(this.timer)
  }
 return Game;
})