import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {Actions,Originals} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Banner/>
     <Rowpost url={Originals} title='Netflix Originals'/>
     <Rowpost url={Actions} title='Action Movies'  isSmall/>
    </div>
  );
}

export default App;
