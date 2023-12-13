// tailwind.config.js
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic':
			'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
		colors: {
		  primary: "#E30B5C",
		  secondary: "#333333",
		  // Add more default Tailwind colors here or use the full color palette
		  // You can find the full palette in the Tailwind CSS documentation
		  // https://tailwindcss.com/docs/customizing-colors#default-color-palette
		},
	  },
	},
	plugins: [],
	corePlugins: {
	  colors: false, // Disable Tailwind CSS's default color plugin
	},
  };
  