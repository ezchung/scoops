const Destination = require('./Destination')

class Restaurant extends Destination{
    constructor(menu){
        this.menu = []
    }
}

module.exports = Restaurant;