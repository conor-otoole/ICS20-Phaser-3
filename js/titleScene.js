/* global Phaser */

// Copyright (c) 2022 Conor All rights reserved
//
// Created by: conor-otoole
// Created on: dec 2022
// This is the Title scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

init (data) {
  this.cameras.main.setBackgroundColor('#ffffff')
}

  preload () {
    console.log('Title Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene