import Phaser from 'phaser'

export default class Example2 extends Phaser.Scene {
  constructor() {
    super({ key: 'Example2' })
  }
  create() {
    this.text = this.add.text(0, 0, 'Welcome to Example2!', {
      font: '40px Impact',
      color: '#ff0000'
    })
    const tween = this.tweens.add({
      targets: this.text,
      x: 200,
      y: 250,
      duration: 2000,
      ease: 'Elastic',
      easeParams: [1.5, 0.5],
      delay: 1000,
      onComplete: (src, trg) => {
        trg[0].x = 0
        trg[0].y = 0
        trg[0].setColor('white')
      }
    })
  }
}
