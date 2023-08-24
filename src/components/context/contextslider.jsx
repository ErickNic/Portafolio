import { createContext, useReducer, useState } from "react";

export const sliderContext = createContext({
  index:{count:0},
  dispatch:()=>{}
});

const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
};

const SliderProvider = ({children}) =>{
    const initialState = {count:0}
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return(
        <sliderContext.Provider value={{index:state,dispatch:dispatch}}>
            {children}
        </sliderContext.Provider>
    )
}

export  {SliderProvider}