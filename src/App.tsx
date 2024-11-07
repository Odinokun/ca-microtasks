import './App.css';
import { Header } from './01-nested-components/Header';
import { Body } from './01-nested-components/Body';
import { Footer } from './01-nested-components/Footer';

function App() {
  return (
    <>
      <Header title='New header' />
      <Body title='New body' />
      <Footer title='New footer' />
    </>
  );
}

export default App;
