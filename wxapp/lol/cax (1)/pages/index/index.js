// require es5就支持， node 普遍采用的模块化方案(commonjs)
// import from es6模块化方案（开发中分离代码，一个文件一个功能）
import cax from '../../cax/index'
Page({
  onLoad (options) {
    // Sync阻止异步
    const info = wx.getSystemInfoSync();
    // console.log(info);
    // canvas绘制了,先确定宽高再画 
    const stage = new cax.Stage(info.windowWidth, info.windowHeight, 'myCanvas', this);
    const rect = new cax.Rect(100, 100, {
      fillStyle: 'black'
    });
    rect.originX = 50;
    rect.originY = 50;
    rect.x = 100;
    rect.y = 100;
    rect.rotation = 30;
    stage.add(rect);
    const button = new cax.Button({width: 100, height: 40, text: 'I am button!'});
    button.x = 20;
    button.y = 170;
    stage.add(button);
    // 位图
    const bitmap = new cax.Bitmap('/images/wx.png')
    bitmap.on('tap', () => {
      console.log('bitmap tap');
    })
    stage.add(bitmap);
    const sprite = new cax.Sprite({
      framerate: 7,
      imgs: ['/images/mario-sheet.png'],
      frames: [
        // 左上角 0 0 
        [0, 0, 32, 32],
        [32 * 1, 0, 32, 32],
        [32 * 2, 0, 32, 32],
        [32 * 3, 0, 32, 32],
        [32 * 4, 0, 32, 32],
        [32 * 5, 0, 32, 32],
        [32 * 6, 0, 32, 32],
        [32 * 7, 0, 32, 32],
        [32 * 8, 0, 32, 32],
        [32 * 9, 0, 32, 32],
        [32 * 10, 0, 32, 32],
        [32 * 11, 0, 32, 32],
        [32 * 12, 0, 32, 32],
        [32 * 13, 0, 32, 32],
        [32 * 14, 0, 32, 32]
      ],
      animations: {
        // 帧数
        walk: {
          frames: [0, 1]
        },
        happy: {
          frames: [11, 12, 13, 14]
        },
        win: {
          frames: [7, 8, 9, 10]
        }
      },
      currentAnimation: 'win'
    })
    sprite.x = 100
    sprite.y = 100
    stage.add(sprite)
    // x坐标值为200的地方 2s之后
    cax.To.get(rect).to().x(200, 2000, cax.easing.elasticInOut).start();
    setInterval(function() {
      stage.update();
    })   
  }
  
})