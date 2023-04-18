// METACRITIC DOESN'T HAVE AN API BUT I AM TRYING TO FIND A LITTLE WORK AROUND SO WE DON'T HAVE TO USE EXPRESS
// IF YOU'RE COMFORTABLE USING EXPRESS THEN WE CAN SET THAT UP!

const metacritic = require('metacritic-scraper');

// here I am just declaring the metacritic variable imported as an NPM package.
// this is a test line API request looking for reviews on the movie sausage party lol

metacritic.search('sausage party', { category: 'movie' }).on('end', (results) => {
    metacritic.getProduct(results[0]).on('end', (info) => {
        console.log(info.reviews.critic_reviews)
    })
});