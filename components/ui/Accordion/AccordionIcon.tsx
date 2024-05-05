import Image from 'next/image'
import React from 'react'

interface Props {
    iconPath: string
    isActive: boolean
}

const IconBorder = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg
            width="100"
            height="114"
            viewBox="0 0 100 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        >
            <path
                className={`${
                    isActive ? 'fill-white' : 'fill-[#13171D]'
                } transition-all ease-in-out duration-300`}
                d="M16 41.5204C16 39.3467 17.1756 37.343 19.0731 36.2827L47.0731 20.6356C48.892 19.6192 51.108 19.6192 52.9269 20.6356L80.9269 36.2827C82.8244 37.343 84 39.3467 84 41.5204V72.4796C84 74.6533 82.8244 76.657 80.9269 77.7173L52.9269 93.3644C51.108 94.3808 48.892 94.3808 47.0731 93.3644L19.0731 77.7173C17.1756 76.657 16 74.6533 16 72.4796V41.5204Z"
                fill="#13171D"
            />

            <path
                opacity="1"
                d="M22 45.0366C22 42.8543 23.1849 40.8441 25.0941 39.7872L47.0941 27.6086C48.9021 26.6078 51.0979 26.6078 52.9059 27.6086L74.9059 39.7872C76.8151 40.8441 78 42.8543 78 45.0366V68.9634C78 71.1457 76.8151 73.1559 74.9059 74.2128L52.9059 86.3914C51.0979 87.3922 48.9021 87.3922 47.0941 86.3914L25.0941 74.2128C23.1849 73.1559 22 71.1457 22 68.9634V45.0366Z"
                fill="#2a2e33"
            />
        </svg>
    )
}

export const AccordionIcon: React.FC<Props> = ({ iconPath, isActive }) => {
    return (
        <div className="relative w-28 h-full">
            <Image
                src={iconPath}
                width={26}
                height={26}
                alt="icon"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            />
            <Image
                src="/assets/images/icons/accordion-border.svg"
                width={100}
                height={100}
                alt="icon"
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            />
            <IconBorder isActive={isActive} />
        </div>
    )
}
