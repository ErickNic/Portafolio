import React,{useState,useEffect} from "react";
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
            <div className={clases.contentHero__Container}>
                <Hero className={clases.aboutme}/>
                <div className={clases.Main__Tecnolog}>
                    <p>Tecnologías section</p>
                </div>
                <div className={clases.Main__Portafolio}>
                    <h2>Proyectos relevantes</h2>
                    <ProyectCard items={algoData}/>
                </div>
            </div>
        </div>
    )
}

export default Principal