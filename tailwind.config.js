/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'main-bg': "url('../src/assets/background.jpg')",
            },
            filter: {
                'blur-sm': 'blur(4px)',
                'blur-md': 'blur(8px)',
                'blur-lg': 'blur(12px)',
            },
            colors: {
                "light-gray": "#737373",
            }
        },
    },
    plugins: [
        require('tailwindcss-filters'),
    ],
}

