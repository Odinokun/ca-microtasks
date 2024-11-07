import './App.css';
import { Cars } from './Cars';

const topCars = [
  { manufacturer: 'BMW', model: 'm5cs' },
  { manufacturer: 'Mercedes', model: 'e63s' },
  { manufacturer: 'Audi', model: 'rs6' },
];

function App() {
  return (
    <>
      <Cars cars={topCars} />
    </>
  );
}

export default App;
