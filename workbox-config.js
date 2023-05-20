module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,ttf,css,html,js,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};