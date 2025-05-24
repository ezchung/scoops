class Destination{
    /**
     * Name of location, address, menu, images,
     */
    constructor(name, address, reviews, images, rating){
        this.name = name;
        this.address = address;
        this.rating = 0.0;
    }

    addRating(rate, topic){
        //depending on how rating is done
            //score will be based on certain things (food, customer service, vibe)
    }
}

module.exports = Destination;