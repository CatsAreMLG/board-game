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
  }
}
