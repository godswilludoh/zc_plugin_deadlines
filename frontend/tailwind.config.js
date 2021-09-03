module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#00B87C',
					secondary: '#1A61DB',
					accent: '#B8003C',
					text: {
						header: '#242424',
						body: '#3A3A3A',
						leftNav: '#999999',
						time: '#DADADA',
						lightIcon: '#BEBEBE',
					},
					error: '#F40101',
					bg: {
						lightGrey: '#F6F6F6',
						white: '#FFFFFF',
					},
					success: '#008B5E',
					avatar: {
						pink: '#F7E0FF',
						yellow: '#F8FFCD',
						red: '#FFF0F0',
						green: '#ACFFE6',
						blue: '#E3EEFF',
					},
				},
			},
			textColor: {
				cra: {
					link: '#61dafb',
					primary: '#282c34',
				},
			},
			fontFamily: {
				craFont: [
					'-apple - system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans - serif',
				],
			},
			width: {
				'1/7': '18.5857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
