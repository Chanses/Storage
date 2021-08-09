import React from 'react';
import '../components/Navigation.css'
import { BrowserRouter, Link, NavLink, Route, Router } from 'react-router-dom'


const Navigation = () =>{

    
    return(
        
        <div className ="Nav">
            
            <BrowserRouter>
            
            <NavLink to ="/Priemka">Приемка</NavLink>
            <NavLink to ="/Vidacha">Выдача</NavLink>
            <NavLink to ="/Storage">Остатки</NavLink>
            <NavLink to ="/TO">ТО</NavLink>
            </BrowserRouter>
         </div>
    
    )
}

export default Navigation;