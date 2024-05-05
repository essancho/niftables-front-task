import Image from 'next/image'
import React from 'react'
import { AccordionIcon } from './AccordionIcon'
import { Transition } from '@headlessui/react'

interface Props {
    id: number
    title: string
    description: string
    iconPath: string
    isActive: boolean
    toggle: (id: number) => void
}

export const AccordionItem: React.FC<Props> = ({
    id,
    title,
    description,
    iconPath,
    isActive,
    toggle,
}) => {
    return (
        <div className="transition-all ease-in-out h-auto duration-500">
            <div
                onClick={() => toggle(id)}
                className="flex 2xl:h-36 xl:h-36 lg:h-24 w-full items-center justify-between cursor-pointer"
            >
                <div className="w-1/5 flex justify-start items-center">
                    <AccordionIcon iconPath={iconPath} isActive={isActive} />
                </div>
                <div className="w-3/5 flex justify-start items-center">
                    <span className="2xl:text-2xl xl:text-lg lg:text-base text-left font-bold hover:text-creon-blue transition-colors duration-300 pl-5">
                        {title}
                    </span>
                </div>
                <div className="w-1/5 flex justify-end items-center">
                    <Image
                        src="/assets/images/icons/accordion-arrow.svg"
                        alt={isActive ? 'arrow down' : 'arrow up'}
                        width={26}
                        height={26}
                        className={`${
                            !isActive ? 'rotate-180' : ''
                        } transition-transform duration-300`}
                    />
                </div>
            </div>
            <Transition
                show={isActive}
                enter="transition duration-300 ease-out"
                enterFrom="transform origin-top scale-y-0 opacity-0"
                enterTo="transform origin-top scale-y-100  opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform origin-top scale-y-100 h-full opacity-100"
                leaveTo="transform origin-top scale-y-0 h-0 opacity-0"
            >
                <div className="w-full flex justify-end pl-5">
                    <div className="w-4/5">{description}</div>
                </div>
            </Transition>
            <div className="border-b border-creon-grey pt-5 transition-transform duration-300"></div>
        </div>
    )
}
