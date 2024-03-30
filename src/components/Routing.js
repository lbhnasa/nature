import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './Home';
import Animals from './Animals';



function Routing() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/animals" element={<Animals/>}/> 
            {/* <Route path="/" element={<Home/>} />
            <Route path="/" element={<Home/>} />  */}
        </Routes>
        </>
    ) 
}

export default Routing;