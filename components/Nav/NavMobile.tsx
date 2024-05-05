'use client'

import { Menu } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import { NAV_LINKS } from './Nav'
import Link from 'next/link'
import { NavLink } from './NavLink'
import { createPortal } from 'react-dom'
import { CreonButton } from '../ui/Button/Button'

export const NavMobile = () => {
    const [toggleOpen, setToggleOpen] = React.useState(false)
    return (
        <div>
            {!toggleOpen && (
                <div onClick={() => setToggleOpen(() => true)}>
                    <Image
                        src="/assets/images/icons/menu.svg"
                        alt="mobile menu button"
                        width={30}
                        height={30}
                    />
                </div>
            )}
            {toggleOpen &&
                createPortal(
                    <div className="absolute inset-0 bg-black/90">
                        <div className="absolute top-0 bottom-0 left-2/4 right-0 bg-black">
                            <ul className="px-5 py-5">
                                <li className="ml-5 text-lg flex justify-between pb-10">
                                    <div>
                                        <CreonButton className="bg-transparent border-solid border-2 border-neutral-100 px-5 py-3 rounded-md hover:bg-blue-500 hover:transition-all ease-in-out font-bold xl:text-sm">
                                            Connect
                                        </CreonButton>
                                    </div>
                                    <div onClick={() => setToggleOpen(false)}>
                                        <Image
                                            src="/assets/images/icons/menu-close.png"
                                            alt="mobile menu button"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                </li>
                                {NAV_LINKS.map((link) => (
                                    <NavLink key={link.id} {...link} />
                                ))}
                            </ul>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    )
}
// <Menu>
//     <Menu.Button>
//         <Image
//             src="/assets/images/icons/menu.svg"
//             alt="mobile menu button"
//             width={30}
//             height={30}
//         />
//     </Menu.Button>
//     <Menu.Items className="flex flex-col bg-black min-h-screen">
//         {NAV_LINKS.map((link) => (
//             <Menu.Item key={link.id}>
//                 <NavLink {...link} />
//             </Menu.Item>
//         ))}
//     </Menu.Items>
// </Menu>
