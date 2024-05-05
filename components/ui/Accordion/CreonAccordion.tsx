'use client'

import React from 'react'
import { AccordionItem } from './AccordionItem'

interface Props {
    data: {
        title: string
        iconPath: string
        description: string
        id: number
    }[]
}

export const CreonAccordion: React.FC<Props> = ({ data }) => {
    const [currentId, setCurrentId] = React.useState<number | null>(1)
    const handleToggle = (id: number) => {
        if (currentId === id) {
            setCurrentId(null)
            return
        }
        setCurrentId(id)
    }
    return data.map((item) => (
        <AccordionItem
            {...item}
            key={item.id}
            isActive={item.id === currentId}
            toggle={handleToggle}
        />
    ))
}
