import React from "react";
import Hero from '../hero/Hero';
import clases from './principal.module.css'
import { Helmet } from "react-helmet";


const Principal = () =>{
    return(
        <div className={clases.heroMainContainer}>
            <Helmet>
                <title>ErickMMA - Desarrollador web</title>
            </Helmet>
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