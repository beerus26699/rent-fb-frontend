/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#19b21c',
                secondary: '#ececec',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'football-card':
                    '0 1px 3px 0 #00000033, 0 1px 1px 0 #00000024, 0 2px 1px -1px #0000001f, -1px 0 0 0 #0000000d',
                'form-card': '0 1px 2px 0 #0000001a',
            },
        },
    },
    plugins: [],
};
