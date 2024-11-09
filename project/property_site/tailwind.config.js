/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				shaper: {
				  "0%": { transform: "skewX(50deg) rotate(0deg)" },
				  "10%": { transform: "skewX(40deg) rotate(90deg)" },
				  "20%": { transform: "skewX(20deg) rotate(180deg)" },
				  "30%": { transform: "skewX(20deg) rotate(270deg)" },
				  "40%": { transform: "skewX(-40deg) rotate(360deg)" },
				  "50%": { transform: "skewX(-50deg) rotate(400deg)" },
				  "60%": { transform: "skewX(-40deg) rotate(450deg)" },
				  "70%": { transform: "skewX(-20deg) rotate(490deg)" },
				  "80%": { transform: "skewX(20deg) rotate(580deg)" },
				  "90%": { transform: "skewX(40deg) rotate(630deg)" },
				  "100%": { transform: "skewX(50deg) rotate(720deg)" },
				},
			  },
			  animation: {
				spin1: "shaper 10s linear infinite",
				spin2: "shaper 20s linear infinite",
				spin3: "shaper 30s linear infinite",
				spin4: "shaper 115s linear infinite",
				spin5: "shaper 110s linear infinite",
				spin6: "shaper 120s linear infinite",
			  },
		},
		fontFamily: {
			dmsans: ["DM Sans"],
		  },
	},

	plugins: [
		require('taos/plugin')
	],
	// safelist: [
	// 	'!duration-[0ms]',
	// 	'!delay-[0ms]',
	// 	'html.js :where([class*="taos:"]:not(.taos-init))'
	//   ],
	//   content: {
	// 	relative: true,
	// 	transform: (content) => content.replace(/taos:/g, ''),
	// 	files: ['./src/*.{html,js,svelte}'],
	//   },
};

// module.exports = {
// 	safelist: [
// 	  '!duration-[0ms]',
// 	  '!delay-[0ms]',
// 	  'html.js :where([class*="taos:"]:not(.taos-init))'
// 	]
//   }

//   module.exports = {
// 	content: {
// 	  relative: true,
// 	  transform: (content) => content.replace(/taos:/g, ''),
// 	  files: ['./src/*.{html,js}'],
// 	},
//   }