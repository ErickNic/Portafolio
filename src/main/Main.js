import React from 'react';
import {
    Route,
    Routes
  } from 'react-router-dom';
import Principal from '../components/pages/Principal'
import Portfolio from '../components/pages/Portfolio';
import Sobremi from '../components/pages/Sobremi';
import Conectemos from '../components/pages/Conectemos';

const Main = () =>{
    return(
        <main className='main'>
            <Routes>
                <Route path='/' exact element={<Principal title="ErickMMA - Conáctame"/>}/>
                    <Route path='/porfolio' exact element={<Portfolio/>}/>
                <Route path='/sobremi' exact element={<Sobremi/>}/>
                <Route path='/conectemos' exact element={<Conectemos/>}/>
            </Routes>
        </main>
    );

}

export default Main