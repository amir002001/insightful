import React from 'react'

export const Caret = (props: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={props.className ?? ''}
            fill="none"
            viewBox="0 0 24 24"
        >
            <g clipPath="url(#clip0_26_181)">
                <path fill="#232020" d="M7 10l5 5 5-5H7z"></path>
            </g>
            <defs>
                <clipPath id="clip0_26_181">
                    <path fill="#fff" d="M0 0H24V24H0z"></path>
                </clipPath>
            </defs>
        </svg>
    )
}
