module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/napier-grade-calculator'
        : '/',
    "transpileDependencies": [
        "vuetify"
    ]
}
