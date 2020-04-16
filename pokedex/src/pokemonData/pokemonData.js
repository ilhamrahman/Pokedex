import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import charmander from './charmander.png';
import venusaur from './venusaur.png';


class pokemonData extends React.Component { 

    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    render () {
return(

        <div className="row" style={{paddingLeft:"14px"}} >

            <div >
            <img src={venusaur}/>
            </div>

            <div className="col" >
            <h2 style={{ color: '#dc0f2d' , paddingTop: "30px",paddingBottom:"30px"}}> <strong> Binoy </strong> </h2>
            </div>

          

            </div>
            
   

   

);



}

}
export default pokemonData;


