import React from "react";
import Hero from '../hero/Hero';
import clases from './principal.module.css'

const Principal = () =>{
    return(
        <div className={clases.heroMainContainer}>
            <Hero/>
            <div className="Main__Tecnologías">
                            <p>Tecnologías section</p>
                        </div>
                        <div className="Main__Tecnologías">
                            <p>Sobre mí section</p>
                        </div>
                        <div className="Main__Portafolio">
                            <p>Porfolio Section</p>
                        </div>
        </div>
    )
}

export default Principal