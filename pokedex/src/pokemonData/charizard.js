import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Charizard.png';


class Charizard extends React.Component { 

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

        <div className="pokePictures">

            <div >
            <img src={image}/>
            </div>

            <div className="pokePictures" >
            <h2 style={{ color: '#dc0f2d'}}> <strong> Charizard </strong> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Type: Fire </em> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Special Attack: Flamethrower </em> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Weakness: Water </em> </h2>
            </div>

          

            </div>
            
   

   

);



}

}
export default Charizard;


