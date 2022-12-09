/* global Phaser */

// Copyright (c) 2022 Conor All rights reserved
//
// Created by: conor-otoole
// Created on: dec 2022
// This is the Game scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Game Scene");
  }

  create(data) {}

  update(time, delta) {}
}

export default GameScene;
