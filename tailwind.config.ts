import type { Config } from 'tailwindcss'

const config: Config = {
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
            fontFamily: {
                monument: ['var(--font-monument)'],
                satoshi: ['var(--font-satoshi)'],
            },
            colors: {
                'creon-blue': '#3d8bff',
                'creon-purple': '#ab23ff',
                'creon-grey': '#13171D',
            },
        },
    },
    plugins: [],
}
export default config
