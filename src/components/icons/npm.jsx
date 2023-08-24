import * as React from "react"

function NPMComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width="48px"
      height="48px"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: "normal"
        }}
      >
        <path
          d="M0 15h48v17H24v3H13v-3H0z"
          fill="#000"
          transform="scale(5.33333)"
        />
        <path
          d="M3 29h5v-8h3v8h2V18H3zm13-11v14h5v-3h5V18zm8 8h-3v-5h3zm5-8v11h5v-8h3v8h3v-8h3v8h2V18z"
          fill="#fff"
          transform="scale(5.33333)"
        />
      </g>
    </svg>
  )
}

export default NPMComponent
