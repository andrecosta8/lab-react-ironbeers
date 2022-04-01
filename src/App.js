
import './App.css';
import {Home} from './components/views/Home';
import {Routes, Route} from 'react-router-dom';
import {Beers} from './components/views/Beers';
import {RandomBeer} from './components/views/RandomBeer';
import {NewBeer} from './components/views/NewBeer';
import { SingleBeer } from './components/views/SingleBeer';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />}/> 
    <Route path="/beers" element={<Beers />}/>
    <Route path="/random-beer" element={<RandomBeer />}/>
    <Route path="/new-beer" element={<NewBeer />}/>
    <Route path="/beers/:beerId" element={<SingleBeer />}/>
    </Routes>
  );
}

export default App;
