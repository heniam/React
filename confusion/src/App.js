import React ,{Component} from 'react';
//import logo from './logo.svg';
// import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
// import {DISHES} from './shared/dishes';

class App extends Component {

  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     dishes:DISHES
  //   };
  // }

  render(){
  return (

    /*   <Navbar dark color="primary">
    //   <div claseName="container">
    //       <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
    //     </div>
    //   </Navbar> */

   <div className="App">
        <Main/>
    </div>

  );
}
}


export default App;
