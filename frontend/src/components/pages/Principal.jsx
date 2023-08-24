import React,{useState,useEffect} from "react";
import Hero from '../hero/Hero';
import clases from './principal.module.css'
import { Helmet } from "react-helmet";
import { algoData,ProyectCard } from "../ProyectCard/ProyectCard";
import MongoDBComponent from "../icons/mongoDB";
import ReactComponent from "../icons/react";
import NextJSComponent from "../icons/nextJS";
import LinuxTerminalComponent from "../icons/linuxTerminal";
import NPMComponent from "../icons/npm";
import NodeComponent from "../icons/node";

const Principal = () =>{
   
    return(
        <div className={clases.heroMainContainer}>
            <Helmet>
                <title>ErickMMA - Desarrollador web</title>
            </Helmet> 
            <div className={clases.contentHero__Container}>
                <Hero className={clases.aboutme}/>
                <div className={clases.Main__Tecnolog}>
                    <p className={clases.techStack__title}>Técnologías que más he usado:</p>
                    <div className={clases.stackIcons__container}>
                        <MongoDBComponent className={clases.stackicons}/>
                        <ReactComponent className={clases.stackicons}/>
                        <LinuxTerminalComponent className={clases.stackicons}/>
                        <NPMComponent className={clases.stackicons}/>
                        <NextJSComponent className={clases.stackicons}/>
                        <NodeComponent className={clases.stackicons}/>
                        
                    </div>
                </div>
                <div className={clases.Main__Portafolio}>
                    <h2 className={clases.proyects_Title}>Proyectos relevantes</h2>
                    <ProyectCard items={algoData}/>
                </div>
            </div>
        </div>
    )
}

export default Principal