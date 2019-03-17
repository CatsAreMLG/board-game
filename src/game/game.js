import Phaser from 'phaser'

import Example1 from './scene/Example1'
// import example2 from './scene/example2'
// import example3 from './scene/example3'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'App',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [Example1]
}
export const game = new Phaser.Game(config)
