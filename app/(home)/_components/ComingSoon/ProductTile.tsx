import { CreonHighlightText } from '@creon/components/ui/HighlightText/CreonHighlightText'
import Image from 'next/image'
import React from 'react'

interface Props {
    id: number
    title: string
    subtitle: string
    imagePath: string
    isAvailable: boolean
    description: string
}

export const ProductTile: React.FC<Props> = ({
    id,
    title,
    subtitle,
    imagePath,
    isAvailable,
    description,
}) => {
    return (
        <div className="relative flex flex-col justify-between w-1/3 bg-gray-900 pb-5 2xl:h-3/4 xl:h-3/5 lg:h-5/6  rounded">
            <div className="absolute right-5 -top-3 rounded-lg bg-white text-black px-3 py-1 text-xs uppercase font-bold">
                Coming Soon
            </div>
            <div className="pl-5 pt-5 h-1/5">
                <span className="uppercase font-monument 2xl:text-3xl xl:text-2xl">
                    {title}
                </span>
                <CreonHighlightText className="2xl:text-xl xl:text-lg">
                    {subtitle}
                </CreonHighlightText>
            </div>
            <div className="h-2/5">
                <Image
                    src={imagePath}
                    width={520}
                    height={200}
                    alt={`${title} image`}
                    className="w-5/6"
                />
            </div>
            <div className="h-2/5 px-5 lg:line-clamp-3 lg:h-2/3 lg:text-sm">
                <span className="2xl:text-lg xl:text-sm">{description}</span>
            </div>
        </div>
    )
}
