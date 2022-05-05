import './App.css';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
import Description from './Components/Description';
import Card from './Components/Card';
import katie from './Components/Images/image 12.png'
import wedding from './Components/Images/wedding.png'
import bike from './Components/Images/mountain-bike.png'


export default function App() {
  return (
    <p className='app'>
      <Navbar />
      <Photos />
      <Description />
      <Card 
          rating='5.0'
          count='(6)'
          img={katie}
          details='Life lessons with Katie Zaferes'
          price='136'/>
      <Card
            rating='5.0'
            count='(30)'
            img={wedding}
            details='Learn wedding photography'
            price='125' />
      <Card
            rating='4.8'
            count='(2)'
            img={bike}
            details='Group Mountain Biking'
            price='50' />     
    </p>
  );
}