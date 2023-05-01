import React from 'react';
import {
    Route,
    Routes
  } from 'react-router-dom';
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
const Porfolio = () =>{
    return(
        <div className="Main__Portafolio">
            <p>Porfolio Main section</p>
        </div>
    )
}
const Sobremi = () =>{
    return(
        <div className="Main__SobreMi">
            <p>Porfolio "Sobre mí" main section</p>
        </div>
    )
}
const Conectemos = () =>{
    return(
    <div className="Main__Conectemos">
        <p>Conectemos section</p>
    </div>
    )
}

const Main = () =>{
    return(
        <main className='main'>
            <Routes>
                <Route path='/' exact element={<Principal/>}/>
                    <Route path='/porfolio' exact element={<Porfolio/>}/>
                <Route path='/sobremi' exact element={<Sobremi/>}/>
                <Route path='/conectemos' exact element={<Conectemos/>}/>
            </Routes>
        </main>
    );

}

export default Main