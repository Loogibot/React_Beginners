import './App.css';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
import Description from './Components/Description';
import Card from './Components/Card';


export default function App() {
  return (
    <p className='app'>
      <Navbar />
      <Photos />
      <Description />
      <Card />
      

    </p>
  );
}