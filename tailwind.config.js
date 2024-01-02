/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'mainBg': '#121117',  	// 主页背景色
				'greyText': '#8d8d8d',	// 大部分灰色字体颜色
			},
		},
	},
	plugins: [],
};
