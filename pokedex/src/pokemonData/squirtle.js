import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './squirtle.png';


class Squirtle extends React.Component { 

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
            <h2 style={{ color: '#1e90ff'}}> <strong> Squirtle </strong> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Type: Water </em> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Special Attack: Bubble </em> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Weakness: Grass </em> </h2>
            </div>

          

            </div>
            
   

   

);



}

}
export default Squirtle;


