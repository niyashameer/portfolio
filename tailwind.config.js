module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./shared/**/*.{js,ts,jsx,tsx}",
		"./assets/**/*.svg",
	],
	theme: {
		extend: {
			colors: {
				lightBlack: "#263238",
				orange: "#F67833",
				gray: "#A1A1B0",
				darkBlue: "#17419E",
				darkerBlue: "#263238",
				retro: "#7F7575",
				darkRed: "#A3112E",
				lightGreen: "#92E3A9",
				lightText: "#E0E0E0"
			},
			fontFamily: {
				primary: ["SF-Pro-Display-Light"],
				primaryBold: ["SF-Pro-Display-Bold"],
				primarySemiBold: ["SF-Pro-Display-Semibold"],
				primaryMedium: ["SF-Pro-Display-Medium"],
			},
			dropShadow: {
				"3xl": "0 25px 25px rgba(0, 0, 0, 0.45)",
			},
		},
	},
	plugins: [],
};
