import React from 'react'

import { InfoTile } from './InfoTile'
import { INFO_TILES } from './data'

export const AIInfo = () => {
    return (
        <section className="relative z-0 2xl:h-[970px] xl:h-[870px] overflow-y-hidden">
            <video
                autoPlay
                muted
                loop
                className="absolute left-0 bottom-0 z-10 w-full"
                src="/assets/videos/roadmap-video.mp4"
            ></video>
            <div className="bg-gradient-to-b from-black from-30% via-transparent via-80% to-black to-100% w-full absolute left-0 top-0 z-20 h-full" />
            <div className="2xl:max-w-[1440px] xl:max-w-[1140px] lg:max-w-[970px] lg:h-[740px] mx-auto h-full flex flex-col justify-center">
                <div className="flex flex-col gap-5 container mx-auto z-30 relative">
                    {INFO_TILES.map((info) => (
                        <InfoTile key={info.id} {...info} />
                    ))}
                </div>
            </div>
        </section>
    )
}
