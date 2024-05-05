import { Nav } from '@creon/components/Nav/Nav'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <div>{children}</div>
        </>
    )
}
