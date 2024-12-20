/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./public/*.html"],
	theme: {
		extend: {
			backgroundPosition: {
				"top-50": "right top -200px",
			},
			screens: {
				sm: "640px",
				md: "768px",
				xl: "1440px",
			},
			fontFamily: {
				PublicSans: ["Public sans"],
			},
		},
		plugins: [require("@tailwindcss/aspect-ratio")],
	},
};
