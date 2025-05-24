const Influencer = require('../Influencer'); // Adjusted the path to go up one directory

describe('Influencer Class', () => {
    let influencer;

    beforeEach(() => {
        influencer = new Influencer(
            'Jane Doe',
            'jane@example.com',
            'securepassword',
            '1990-01-01',
            'New York',
            'Lifestyle blogger',
            'influencer',
            new Map([['Instagram', 'https://instagram.com/janedoe']]),
            50000
        )
    });

    test('should create an influencer', () => {
        expect(influencer.name).toBe('Jane Doe');
    });

})