// Copyright (c) 2022 Conor All rights reserved
//
// Created by: conor-otoole
// Created on: nov 2022
// This is the file for Phaser3 configuration

/* global phaser */

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale,
    FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
console.log(game);
