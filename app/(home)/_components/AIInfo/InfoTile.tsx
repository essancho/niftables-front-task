import Image from 'next/image'
import React from 'react'

interface Props {
    id: number
    title: string
    description: string
    imagePath: string
}

export const InfoTile: React.FC<Props> = ({
    id,
    title,
    description,
    imagePath,
}) => {
    return (
        <div className="flex justify-between bg-creon-grey/60 rounded overflow-hidden">
            <div className="w-4/5 flex flex-col justify-center gap-4 px-5 py-10">
                <span className="font-monument 2xl:text-3xl xl:text-2xl uppercase">
                    {title}
                </span>
                <span>{description}</span>
            </div>
            <div className="w-1/5">
                <Image
                    width={320}
                    height={120}
                    src={imagePath}
                    alt={`${title} - image`}
                    className="h-full"
                />
            </div>
        </div>
    )
}
