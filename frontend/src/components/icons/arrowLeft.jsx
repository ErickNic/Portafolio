import * as React from "react"
import { useContext } from "react"
import { sliderContext } from "../context/contextslider"

function ArrowLeftComponent(props) {
  const {index,dispatch} = useContext(sliderContext)

  const handleclick = () =>{
    if(index.count===0) return;
    return dispatch({type:'DECREMENT'})
  }
  return (
    <svg 
      onClick={handleclick}
      width="35px"
      height="35px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 12h12M6 12l5-5m-5 5l5 5"
        stroke={index.count===0?'#9B9B9B':'#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeftComponent
