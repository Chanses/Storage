import React from 'react';
import './Priemka.css'
import { BrowserRouter, Link, NavLink, Route, Router } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap';


const Priemka = () =>{

    
    return(
        
        <div className ="Priemka">
           <div className = "Title">Приемка</div>
           
           <Table striped bordered hover>
               <thead className = "thead-default">
                   <td>Наименование</td>
                   <td>Количество</td>
                   <td>Вид измерения</td>
                   <td>Остаток</td>
                   <td><Button  variant="danger">Delete</Button></td>
                 
               </thead>
           </Table>
         </div>
    
    )
}

export default Priemka;