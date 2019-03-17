import Phaser from 'phaser'

import Example1 from './scene/Example1'
import Example2 from './scene/Example2'
import Example3 from './scene/Example3'

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
  scene: [Example1, Example2, Example3]
}
export const game = new Phaser.Game(config)
