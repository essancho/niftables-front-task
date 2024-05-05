import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <div className="2xl:max-w-[1440px] xl:max-w-[1140px] lg:max-w-[970px] mx-auto bg-black">
            <div className="flex justify-between items-center h-16 ">
                <span>© Creon 2023. All rights reserved.</span>
                <div className="flex w-2/4 gap-5">
                    <Image
                        src="/assets/images/icons/Telegram.png"
                        width={34}
                        height={34}
                        alt="Telegram"
                    />
                    <Image
                        src="/assets/images/icons/Discord.png"
                        width={34}
                        height={34}
                        alt="Telegram"
                    />
                    <Image
                        src="/assets/images/icons/Twitter.png"
                        width={34}
                        height={34}
                        alt="Telegram"
                    />
                </div>
                <div>
                    <span>
                        Powered by{' '}
                        <Image
                            className="inline"
                            src="/assets/images/icons/niftables.png"
                            width={83}
                            height={21}
                            alt="Niftables logo"
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}
