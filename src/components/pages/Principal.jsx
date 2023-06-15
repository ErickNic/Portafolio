import React,{useState,useEffect} from "react";
import Hero from '../hero/Hero';
import clases from './principal.module.css'
import { Helmet } from "react-helmet";
import { algoData,ProyectCard } from "../ProyectCard/ProyectCard";

const Principal = () =>{
    const [onTransition,setOnTransition] = useState(false)
    useEffect(()=>{
        if(onTransition){
            //LOGICA DE CÓDIGO DE TRANSITION para
        }else{
            //LOGICA DE CÓDIGO DE TRANSITION para ir a ver los proyectos recientes
        }
    },[onTransition])
    const seeProyectsHandler = () =>{
        setOnTransition(true)
    }
    const comebackHeroHandler = () =>{
        setOnTransition(false)
    }
    return(
        <div className={clases.heroMainContainer}>
            <Helmet>
                <title>ErickMMA - Desarrollador web</title>
            </Helmet> 
            {!onTransition && 
            <div>
                <Hero/>
                <div className="Main__Tecnologías">
                    <p>Tecnologías section</p>
                </div>
                <p onClick={seeProyectsHandler} style={{cursor:"pointer"}}>See recent Proyects</p>
            </div>
        }
            {!!onTransition && <div className="Main__Portafolio">
                <p onClick={comebackHeroHandler}>Regresar</p>
                <ProyectCard items={algoData}/>
            </div>}
        </div>
    )
}

export default Principal