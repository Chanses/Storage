import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import '../components/Content.css'
import Priemka from './Priemka/Priemka';
import Storage from './Storage/Storage';


const Content = () =>{


    return(
        <div className ="Content">
            <BrowserRouter>
                <Route exact path="/Priemka"><Priemka/></Route>
                <Route  path="/Storage"><Storage/></Route>
            </BrowserRouter>
      
        </div>
    
    )
}

export default Content;