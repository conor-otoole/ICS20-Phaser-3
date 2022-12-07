/* global Phaser */

// Copyright (c) 2022 Conor All rights reserved
//
// Created by: conor-otoole
// Created on: dec 2022
// This is the splash scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

init (data) {
  this.cameras.main.setBackgroundColor('#ffffff')
}

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default SplashScene