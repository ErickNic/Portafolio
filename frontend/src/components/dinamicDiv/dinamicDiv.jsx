import clases from './dd.module.css';
import { useState } from 'react';
export const DinamicDivs = (props) =>{
    const [mouseX,setMouseX] = useState();
    const [mouseY,setMouseY] = useState();

    const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
    };
    
    return(
        <div className={clases.container} onMouseMove={handleMouseMove}> 
            <h1 className={clases.container_text}>Click to see more</h1>
        </div>
    )
}
