import './App.css';

function App() {
  const myFirstSubscriber = (name: string) => {
    console.log('My name is: ', name);
  };

  return (
    <>
      <button onClick={() => myFirstSubscriber('Bob')}>
        MyYouTubeChannel-1
      </button>

      <button onClick={() => myFirstSubscriber('Dima')}>
        MyYouTubeChannel-2
      </button>
    </>
  );
}

export default App;
