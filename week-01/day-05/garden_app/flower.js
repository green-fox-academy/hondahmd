'use strict';

const Plant = require('./plant');

class Flower extends Plant {
    constructor(color, waterAmount = 0) {
        super(color, 0.75, 5, waterAmount);
    }

    blossom() {
        console.log("The flower blossomed.");
    }
}

module.exports = Flower;