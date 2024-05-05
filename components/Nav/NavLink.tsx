import Link from 'next/link'
import React from 'react'

type Props = {
    id: number
    title: string
    link: string
    isAvailable: boolean
}

export const NavLink: React.FC<Props> = ({ id, title, link, isAvailable }) => {
    return (
        <li
            key={id}
            className="mx-3 2xl:text-lg font-bold relative px-5 cursor-pointer"
        >
            <Link href={link}>{title}</Link>
            {!isAvailable && (
                <>
                    <div className="text-xs absolute flex justify-center items-center rounded-md bg-black text-creon-purple -top-1 -right-7 py-1 px-2 md:hidden lg:flex xl:flex 2xl:flex sm:hidden">
                        Soon
                    </div>
                    <span className="xl:hidden lg:hidden 2xl:hidden sm:inline md:inline text-creon-purple pl-10">
                        Soon
                    </span>
                </>
            )}
        </li>
    )
}
