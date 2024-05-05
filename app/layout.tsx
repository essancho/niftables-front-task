import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const monumentFont = localFont({
    src: '../public/assets/fonts/MonumentExtended-Regular.woff2',
    variable: '--font-monument',
})

const satoshiFont = localFont({
    src: [
        {
            path: '../public/assets/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/assets/fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/assets/fonts/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-satoshi',
})

export const metadata: Metadata = {
    title: {
        template: '%s | CREON',
        default: 'CREON',
    },
    description: 'All-in-One NFT Platform',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${monumentFont.variable} ${satoshiFont.variable}`}
            >
                {children}
            </body>
        </html>
    )
}
