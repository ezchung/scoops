class User {
    constructor(name, email, password, dateOfBirth, location, bio, title) {
        this.name = name;
        this.email = email;
        this.password = password; // In a real app, store hashed passwords only
        this.dateOfBirth = dateOfBirth;
        this.location = location; // e.g., city or address
        this.bio = bio; // Short user description
        this.reviews = []; // Array to store user reviews
        this.profilePicture = null; // URL or file path to profile picture
        this.title = title; //Choices of user, blogger, influencer
    }

    getDetails() {
        return {
            name: this.name,
            email: this.email,
            location: this.location,
            bio: this.bio,
        };
    }

    // Method to add a review
    addReview(review) {
        this.reviews.push(review);
    }

    // Method to get all reviews
    getReviews() {
        return this.reviews;
    }

    // Method to update profile picture
    updateProfilePicture(pictureUrl) {
        this.profilePicture = pictureUrl;
    }
}

module.exports = User;