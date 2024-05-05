import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLink } from './NavLink'
import { CreonButton } from '../ui/Button/Button'

const NAV_LINKS = [
    {
        id: 1,
        title: 'Creon Pass',
        link: '#',
        isAvailable: true,
    },
    {
        id: 2,
        title: 'Token',
        link: '#',
        isAvailable: false,
    },
    {
        id: 3,
        title: 'AI Revenue',
        link: '#',
        isAvailable: false,
    },
    {
        id: 4,
        title: 'AI Launchpad',
        link: '#',
        isAvailable: false,
    },
]

export const Nav = () => {
    return (
        <nav className="relative w-full flex justify-between px-12 items-center h-24 z-30">
            <div>
                <Image
                    src="/assets/images/logo.png"
                    alt="Creon logo"
                    width={140}
                    height={40}
                />
            </div>
            <ul className="flex gap-5 h-full items-center">
                {NAV_LINKS.map((nav_link) => (
                    <NavLink {...nav_link} key={nav_link.id} />
                ))}
                <li className="ml-5 text-lg">
                    <CreonButton className="bg-transparent border-solid border-2 border-neutral-100 px-5 py-3 rounded-md hover:bg-blue-500 hover:transition-all ease-in-out font-bold xl:text-sm">
                        Connect
                    </CreonButton>
                </li>
            </ul>
        </nav>
    )
}
