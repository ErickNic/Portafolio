import React from "react";
import Hero from '../hero/Hero';

const Principal = () =>{
    return(
        <div>
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