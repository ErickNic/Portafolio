import React from 'react';
import {
    Route,
    Routes
  } from 'react-router-dom';
import Principal from '../components/Principal'
import Portfolio from '../components/Portfolio';
import Sobremi from '../components/Sobremi';
import Conectemos from '../components/Conectemos';

const Main = () =>{
    return(
        <main className='main'>
            <Routes>
                <Route path='/' exact element={<Principal/>}/>
                    <Route path='/porfolio' exact element={<Portfolio/>}/>
                <Route path='/sobremi' exact element={<Sobremi/>}/>
                <Route path='/conectemos' exact element={<Conectemos/>}/>
            </Routes>
        </main>
    );

}

export default Main