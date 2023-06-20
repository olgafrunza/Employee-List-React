import './App.scss';
import data from './helper/data';
import List from './components/List/List';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data.slice(0, 5));
  const handleNext = () => {
    let newIndex = index + 5;
    if (newIndex > data.length - 1) newIndex = 0;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };
  const handlePrev = () => {
    let newIndex = index - 5;
    if (newIndex < 0) newIndex = data.length - 5;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List people={people} />
        <div>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
