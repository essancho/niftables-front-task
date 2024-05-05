import React from 'react'

const BENEFITS_LIST = [
    {
        id: 1,
        text: 'Pre-launch investment opportunities for upcoming AI projects',
    },
    {
        id: 2,
        text: 'Free and early access to Creon built AI projects',
    },
    {
        id: 3,
        text: 'Higher allocation limits on the Creon AI Launchpad',
    },
    {
        id: 4,
        text: 'Revenue share distribution from Creon built AI projects',
    },
]

export const CreonPassBenefits = () => {
    return (
        <ul className="flex flex-col gap-5 mt-10">
            {BENEFITS_LIST.map(({ id, text }) => (
                <li
                    className="border rounded-md border-creon-grey inline p-3 max-w-fit"
                    key={id}
                >
                    {text}
                </li>
            ))}
        </ul>
    )
}
