import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Contact from './Components/Contact'

export default function App() {
  return (
    <p className="container">
      <Header />
      <Contact />
      <Main />
    </p>
  );
}
