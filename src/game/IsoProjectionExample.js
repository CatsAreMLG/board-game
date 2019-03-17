import Phaser, { Scene, Game } from 'phaser'
import IsoPlugin from 'phaser3-plugin-isometric'

export default class IsoProjectionExample extends Scene {
  constructor() {
    super({
      key: 'IsoProjectionExample',
      mapAdd: { isoPlugin: 'iso' }
    })
  }

  preload() {
    this.load.image(
      'cube',
      'https://raw.githubusercontent.com/sebashwa/phaser3-plugin-isometric/master/docs/dist/assets/cube.png'
    )
    this.load.scenePlugin({
      key: 'IsoPlugin',
      url: IsoPlugin,
      sceneKey: 'iso'
    })
  }

  create() {
    // Set the origin of the isometric projection to the mid top of the screen
    this.iso.projector.origin.setTo(0.5, 0.35)

    // Even though the children are added back to front, it is sorted the right way
    // because depth value is set on the IsoSprites and Phaser 3 sorts after that by default.
    for (var xx = 256; xx > 0; xx -= 48) {
      for (var yy = 256; yy > 0; yy -= 48) {
        // Create a cube using the new isoSprite factory method at the specified position.
        const isoCube = this.add.isoSprite(xx, yy, 0, 'cube')

        // Add a tween so we can see the depth sorting works on updates
        this.tweens.add({
          targets: isoCube,
          isoX: xx / 16 + xx - 32,
          isoY: yy / 16 + yy - 32,
          isoZ: -Math.cos((xx - yy) / 4) * Math.sin((xx + yy) / 4.03) * 20,
          duration: 2000,
          ease: 'Quad.easeInOut',
          delay: 0,
          yoyo: true,
          repeat: Infinity
        })
      }
    }
  }

  update() {
    // We can interact with the cubes
    // Pick a pseudo-random cube and let it sink on click / touch
    if (this.input.activePointer.justDown) {
      const cube = this.children.list[Math.trunc(Math.random() * 35)]
      cube.isoZ -= 48
    }
  }
}
const window = global.window
const pxl = window.devicePixelRatio
const width = window.innerWidth * pxl
const height = window.innerHeight * pxl

let config = {
  type: Phaser.AUTO,
  width: width,
  height: height,
  pixelArt: true,
  scene: IsoProjectionExample,
  parent: 'App'
}

new Game(config)
