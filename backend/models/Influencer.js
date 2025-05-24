const User = require('./User'); // Import the User class

class Influencer extends User{
    constructor(name, email, password, dateOfBirth, location, bio, title, socialMediaLinks, followersCount) {
        super(name, email, password, dateOfBirth, location, bio, title); // Call the parent class constructor
        this.socialMediaLinks = socialMediaLinks || new Map(); // Array of social media links (instagram, tiktok, youtube)
        this.followersCount = followersCount || 0; // Total number of followers
        //can add speciality later on. for now just need social media and the places they have reviewed
    }

    //later on, will need to have them log into the app itself
    addSocialMediaLink(link, site){
        this.socialMediaLinks.set(site, link);
    }

    getSocialMediaLinks(){
        return this.socialMediaLinks;
    }

}

module.exports = Influencer;