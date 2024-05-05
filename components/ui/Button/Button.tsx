'use client'

import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const CreonButton: React.FC<Props> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>
}
