import { CreonHighlightText } from '@creon/components/ui/HighlightText/CreonHighlightText'
import React from 'react'

export const Profiting = () => {
    return (
        <section className="2xl:max-w-[1440px] xl:max-w-[1140px] lg:max-w-[970px] mx-auto flex flex-col mt-10">
            <div className="flex flex-col pb-20">
                <h2 className="2xl:text-7xl xl:text-4xl lg:text-2xl font-monument uppercase leading-tight">
                    Profiting Through
                </h2>
                <CreonHighlightText className="self-end 2xl:text-4xl xl:text-2xl lg:text-xl uppercase font-monument">
                    AI Innovation & Decentralization
                </CreonHighlightText>
            </div>
            <div className="flex justify-between gap-10">
                <div className="w-2/3">
                    <video
                        autoPlay
                        loop
                        muted
                        src="/assets/videos/creon-logo.mp4"
                    ></video>
                </div>
                <div className="flex flex-col gap-5 w-1/3 min-h-full justify-center border-x border-x-creon-grey px-5 ">
                    <span className="font-bold text-lg">
                        The dynamic community driven business model of the
                        future.
                    </span>
                    <span>
                        At Creon, we blend the power of AI tools with the
                        dynamic crypto and NFT markets, utilizing an innovative
                        business model to drive profitability. This approach
                        empowers our community, as our NFT and token holders
                        directly benefit from the growth and prosperity of the
                        Creon network, creating a win-win scenario for both our
                        community and for the projects we launch.
                    </span>
                </div>
            </div>
        </section>
    )
}
