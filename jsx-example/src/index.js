import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

function MainPage() {
  return(
    <div>
      <Navbar />
    </div>
  )
}

ReactDOM.render(
  
  <MainPage/>

,document.getElementById('root'));