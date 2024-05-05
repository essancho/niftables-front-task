import React from 'react'
import { CreonPassBenefits } from './CreonPassBenefits'
import { CreonButton } from '@creon/components/ui/Button/Button'
import { CreonHighlightText } from '@creon/components/ui/HighlightText/CreonHighlightText'

export const CreonPass = () => {
    return (
        <section className="2xl:max-w-[1440px] xl:max-w-[1140px] lg:max-w-[970px] mx-auto flex lg:justify-between xl:justify-between 2xl:justify-between md:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:items-center sm:items-center mt-10 py-10">
            <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-full sm:w-full">
                <h2 className="2xl:text-7xl xl:text-4xl lg:text-2xl font-monument uppercase leading-tight">
                    Creon Pass NFT
                </h2>
                <CreonHighlightText className="2xl:text-2xl xl:text-lg">
                    The Creon NFT pass unlocks access to AI projects, the Creon
                    launchpad, and a ticket to generate passive income through
                    AI-driven tools
                </CreonHighlightText>
                <div>
                    <CreonPassBenefits />
                    <CreonButton className="bg-gradient-to-r from-creon-blue to-creon-purple font-bold py-3 px-32 mt-5 rounded">
                        Buy Creon Pass
                    </CreonButton>
                </div>
            </div>
            <div className="w-2/4 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    src="/assets/videos/nft-video.mp4"
                ></video>
            </div>
        </section>
    )
}
