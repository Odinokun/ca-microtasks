import './App.css';

function App() {
  const onClickHandler = (name: string) => {
    console.log('My name is: ', name);
  };

  return (
    <>
      <button onClick={() => onClickHandler('Bob')}>MyYouTubeChannel-1</button>

      <button onClick={() => onClickHandler('Dima')}>MyYouTubeChannel-2</button>
    </>
  );
}

export default App;
