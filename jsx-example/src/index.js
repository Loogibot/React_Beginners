import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';

function MainPage() {
  return(
    <div>
      <Navbar />
      <Main/>
    </div>
  )
}

ReactDOM.render(
  
  <MainPage/>

,document.getElementById('root'));