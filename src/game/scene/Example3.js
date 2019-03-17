import Phaser from 'phaser'

export default class Example3 extends Phaser.Scene {
  constructor() {
    super({ key: 'Example3' })
  }
  preload() {
    this.load.audio('kirby', [require('../assets/kirby2a.dsp.wav')])
  }
  create() {
    this.soundFX = this.sound.add('kirby', { loop: 'true' })
    this.soundFX.play()
    this.soundFX.volume = 0.035
    this.soundFX.rate = 1.1
    this.input.keyboard.on('keydown_L', e => {
      this.soundFX.loop = !this.soundFX.loop
      if (this.soundFX.loop) this.soundFX.play()
    })
    this.input.keyboard.on('keydown_SPACE', e => {
      this.soundFX.isPlaying ? this.soundFX.pause() : this.soundFX.resume()
    })
  }
  update(delta) {
    this.input.keyboard.on('keyup', e => {
      if (e.key === '1') {
        this.soundFX.stop()
        this.scene.start('Example1')
      }
      if (e.key === '2') {
        this.soundFX.stop()
        this.scene.start('Example2')
      }
    })
  }
}
