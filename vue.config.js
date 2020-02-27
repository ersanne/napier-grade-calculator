module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    publicPath: process.env.NODE_ENV === 'production'
        ? '/napier-grade-calculator/'
        : '/',
    pwa: {
        name: 'Napier Grade Calculator',
        themeColor: '#e5243f',
    }
}
