import React from 'react'

export const Logo = (props: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={props.className ?? ''}
            fill="none"
            viewBox="0 0 80 93"
        >
            <circle
                cx="46"
                cy="51"
                r="31"
                fill="url(#paint0_radial_0_1)"
            ></circle>
            <path
                fill="#fff"
                d="M32.047 81C26.29 60.364 16.284 51.898 12 50.244 17.757 30.798 33.246 20.646 40.271 18 45.206 28.318 60.146 37.181 67 40.323 46.028 45.085 34.96 69.425 32.047 81z"
            ></path>
            <path
                fill="#FFC1C1"
                d="M32 0l1.956 7.018A48.729 48.729 0 0064 39.639a49.403 49.403 0 00-30.31 32.546L32 78l-1.69-5.815A49.403 49.403 0 000 39.639 48.729 48.729 0 0030.044 7.018L32 0z"
            ></path>
            <path
                stroke="#FF5353"
                strokeWidth="2"
                d="M31.3 12.253l.7-2.519.7 2.519A42.139 42.139 0 0056.335 39.54a42.708 42.708 0 00-23.856 27.215L32 68.41l-.48-1.654A42.708 42.708 0 007.666 39.54 42.139 42.139 0 0031.3 12.253z"
            ></path>
            <path
                fill="#fff"
                d="M37 69.013C52.647 65.688 59.167 49.619 60.47 42 62.26 54.052 70.903 62.606 75 65.377 70.977 75.767 60.284 80.787 55.441 82 49.63 73.688 40.725 69.879 37 69.013z"
            ></path>
            <path
                fill="#FFC1C1"
                d="M60.5 45l1.224 4.435A29.754 29.754 0 0080 69.393a30.163 30.163 0 00-18.437 19.913L60.5 93l-1.063-3.694A30.163 30.163 0 0041 69.393a29.754 29.754 0 0018.276-19.958L60.5 45z"
            ></path>
            <path
                stroke="#FF5353"
                strokeWidth="2"
                d="M49.51 68.77A21.57 21.57 0 0060.5 55.715 21.57 21.57 0 0071.49 68.77 21.854 21.854 0 0060.5 81.463 21.854 21.854 0 0049.51 68.77z"
            ></path>
            <defs>
                <radialGradient
                    id="paint0_radial_0_1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(49.444 -19.044 51.544) scale(68.4416)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF900D"></stop>
                    <stop offset="0.542" stopColor="#FFDCA8"></stop>
                </radialGradient>
            </defs>
        </svg>
    )
}
