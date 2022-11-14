import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/styles.css';
import Card from './components/Card';
import data from './components/data';

function App() {
  const cards = data.map((card) => {
    return (
      <Card 
        key={card.id}
        card={card}
      />
    );
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
