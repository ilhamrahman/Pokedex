import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './bulbasaur.png';


class Bulbasaur extends React.Component { 

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
            <h2 style={{ color: '#7fff00'}}> <strong> Bulbasaur </strong> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Type: Grass </em> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Special Attack: Vine Whip </em> </h2>
            <h2 style={{ color: '#ffffff', fontSize: "20px"}}> <em> Weakness: Fire </em> </h2>
            </div>

          

            </div>
            
   

   

);



}

}
export default Bulbasaur;


