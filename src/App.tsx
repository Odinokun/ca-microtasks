import './App.css';
import { Button } from './components/Button';

function App() {
  const BtnFoo1 = (peopleName: string, age: number, address: string) => {
    console.log(peopleName, age, address);
  };

  const BtnFoo2 = (peopleName: string) => {
    console.log(peopleName);
  };

  const BtnFoo3 = () => {
    console.log('I am a stupid button');
  };

  return (
    <div className='App'>
      <Button
        name='MyYouTubeChannel-1'
        callBack={() => BtnFoo1('Bob', 21, 'Ottawa')}
      />
      <Button name='MyYouTubeChannel-2' callBack={() => BtnFoo2('John')} />
      <Button name='Stupid Button' callBack={BtnFoo3} />
    </div>
  );
}

export default App;
