import Phaser from 'phaser'

export default class Example1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Example1' })
  }
  preload() {
    this.load.image('cat', require('../assets/7b9.jpg'))
  }
  create() {
    this.image = this.add.image(400, 300, 'cat')

    this.input.keyboard.on('keyup_D', e => {
      this.image.x += 10
    })
    this.input.keyboard.on('keyup_P', e => {
      const physicsImage = this.physics.add.image(
        this.image.x,
        this.image.y,
        'cat'
      )
      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300)
    })
    this.input.keyboard.on('keyup', e => {
      if (e.key === '2') this.scene.start('Example2')
      if (e.key === '3') this.scene.start('Example3')
    })
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.input.on('pointerdown', e => {
      this.image.x = e.x
      this.image.y = e.y
    })
  }
  update(delta) {
    if (this.key_A.isDown) this.image.x--
  }
}
