import * as React from "react";
import { useContext,useEffect } from "react"
import { sliderContext } from "../context/contextslider"

function ArrowRightComponent(props) {
  const {index,dispatch} = useContext(sliderContext);

  const handleclick = () =>{
    if(index.count===4) 
    return dispatch({type:'INCREMENT'})
  }
  useEffect(()=>{
    console.log(index)
  },[index]);
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
        d="M6 12h12m0 0l-5-5m5 5l-5 5"
        stroke={index.count===4?'#9B9B9B':"#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRightComponent
