import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Photos from './Components/Photos';
import Description from './Components/Description';


export default function App() {
  return (
    <p className='app'>
      <Navbar />
      <Photos />
      <Description />
      <Main />

    </p>
  );
}