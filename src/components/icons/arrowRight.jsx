import * as React from "react";
import { useContext,useEffect } from "react"
import { sliderContext } from "../context/contextslider"
import clases from './arrow.module.css'

function ArrowRightComponent(props) {
  const {index,dispatch} = useContext(sliderContext);

  const handleclick = () =>{
    if(index.count===3) return;
    return dispatch({type:'INCREMENT'})
  }
  return (
    <svg
      className={index.count!==3?clases.arrow:null}
      onClick={handleclick}
      width="35px"
      height="35px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 12h12m0 0l-5-5m5 5l-5 5"
        stroke={index.count===3?'#9B9B9B':"#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRightComponent
