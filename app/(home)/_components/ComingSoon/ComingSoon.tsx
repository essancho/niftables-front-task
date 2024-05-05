import React from 'react'

import { PRODUCT_ITEMS } from './data'

import { ProductTile } from './ProductTile'

export const ComingSoon = () => {
    return (
        <section className="2xl:max-w-[1440px] xl:max-w-[1140px] 2xl:h-[970px] xl:h-[770px] lg:max-w-[970px] lg:h-[610px] mx-auto flex justify-between gap-10 items-center">
            {PRODUCT_ITEMS.map((product) => (
                <ProductTile {...product} key={product.id} />
            ))}
        </section>
    )
}
