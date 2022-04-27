import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './MainContent';
import Navbar from './Navbar';

function MainPage() {
  return(
    <div>
      <Navbar />
      <MainContent/>
    </div>
  )
}

ReactDOM.render(
  
  <MainPage/>

,document.getElementById('root'));