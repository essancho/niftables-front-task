import React from 'react'
import { Hero } from './_components/Hero/Hero'
import { CreonPass } from './_components/CreonPass/CreonPass'
import { Profiting } from './_components/Profiting/Profiting'
import { Mission } from './_components/Mission/Mission'
import { ComingSoon } from './_components/ComingSoon/ComingSoon'
import { AIInfo } from './_components/AIInfo/AIInfo'
import { Footer } from './_components/Footer/Footer'

const Home = () => {
    return (
        <main className="z-0 font-satoshi font-normal">
            <Hero />
            <CreonPass />
            <Profiting />
            <Mission />
            <ComingSoon />
            <AIInfo />
            <Footer />
        </main>
    )
}

export default Home
