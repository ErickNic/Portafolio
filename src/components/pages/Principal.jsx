import React from "react";
import Hero from '../hero/Hero';
import clases from './principal.module.css'
import { Helmet } from "react-helmet";
import { algoData,ProyectCard } from "../ProyectCard/ProyectCard";

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
            <div className="Main__Portafolio">
                <ProyectCard items={algoData}/>
            </div>
        </div>
    )
}

export default Principal