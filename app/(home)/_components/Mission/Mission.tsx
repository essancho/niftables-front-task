import { CreonAccordion } from '@creon/components/ui/Accordion/CreonAccordion'
import { CreonHighlightText } from '@creon/components/ui/HighlightText/CreonHighlightText'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        title: 'Profitability and Growth',
        description:
            'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        iconPath: '/assets/images/icons/profitability.png',
        id: 1,
    },
    {
        title: 'Transparent & Fair Decentralized Earnings',
        description:
            'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        iconPath: '/assets/images/icons/transparent.png',
        id: 2,
    },
    {
        title: 'Launching the future',
        description:
            'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        iconPath: '/assets/images/icons/launching.png',
        id: 3,
    },
    {
        title: 'Limitless Possibilities of AI & Crypto',
        description:
            'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        iconPath: '/assets/images/icons/limitless.png',
        id: 4,
    },
]

export const Mission = () => {
    return (
        <section className="flex justify-between 2xl:max-w-[1440px] xl:max-w-[1140px] lg:max-w-[970px] 2xl:h-[970px] xl:h-[720px] lg:h-[750px] mx-auto mt-24 pt-10">
            <div className="w-3/5 relative overflow-hidden">
                <h2 className="2xl:text-4xl xl:text-2xl lg:text-xl font-monument uppercase leading-tight w-5/6">
                    Our vision is to support the innovation of AI blockchain
                    projects&nbsp;
                    <CreonHighlightText className="inline">
                        while prioritizing communities and democratizing profits
                    </CreonHighlightText>
                </h2>
                <Image
                    src="/assets/images/creon-vision.png"
                    width={1920}
                    height={1080}
                    alt="creon logo on a background"
                    className="absolute 2xl:left-24 xl:left-14"
                />
            </div>
            <div className="w-2/5 px-5">
                <CreonAccordion data={data} />
            </div>
        </section>
    )
}
