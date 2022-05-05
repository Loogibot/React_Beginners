import './App.css';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
import Description from './Components/Description';
import Card from './Components/Card';
import CardData from './Components/CardData';

export default function App() {
  const cardElements = CardData.map(card => {
    return <Card rating={card.stats.rating}
                  count={card.stats.count}
                  img={card.img}
                  details={card.details}
                  price={card.price} />
  })
  return (
    <div className='app'>
      <Navbar />
      <Photos />
      <Description />
      <section className='cards-list'>
        {cardElements}
      </section>
    </div>
  );
}