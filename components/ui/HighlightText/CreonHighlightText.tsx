import React from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

export const CreonHighlightText: React.FC<Props> = ({ children, ...props }) => {
    return (
        <span
            {...props}
            className={`${props.className} max-w-fit font-bold bg-gradient-to-r from-creon-blue to-creon-purple inline-block text-transparent bg-clip-text`}
        >
            {children}
        </span>
    )
}
