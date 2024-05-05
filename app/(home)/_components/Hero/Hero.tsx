import { Nav } from '@creon/components/Nav/Nav'
import { CreonHighlightText } from '@creon/components/ui/HighlightText/CreonHighlightText'
import React from 'react'

export const Hero = () => {
    return (
        <section className="relative overflow-hidden 2xl:h-[970px] xl:h-[740px] lg:h-[470px] z-0">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black from-10% via-creon-blue via-50% to-creon-purple to-100% mix-blend-soft-light z-20" />
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 z-10"
                    src="/assets/videos/main-background-video.mp4"
                ></video>
            </div>
            <Nav />
            <div className="relative flex items-end justify-center 2xl:h-4/5 xl:h-2/3 lg:h-4/5 2xl:max-w-[1440px] xl:max-w-[1140px] lg:max-w-[970px] mx-auto xl:mx-auto z-30">
                <div className="flex flex-col gap-10 mb-5">
                    <h1 className="2xl:text-[68px] xl:text-4xl lg:text-3xl font-monument uppercase 2xl:leading-tight">
                        The world&apos;s first <br /> platform for Tokenizing AI
                        blockchain projects
                    </h1>
                    <CreonHighlightText className="relative 2xl:text-[22px] after:absolute after:-top-2 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:bg-white  before:bg-white before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r">
                        Hold the Creon Pass NFT and earn passive income from AI
                        Tools
                    </CreonHighlightText>
                </div>
            </div>
        </section>
    )
}
