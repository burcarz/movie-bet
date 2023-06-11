// HELPER FUNCTIONS FOR HANDLEBARS ? TEMPLATING\
module.exports = {
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`
        }
        return word;
    }
}