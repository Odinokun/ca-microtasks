import { useState } from 'react';
import { Input } from './components/Input';
import './App.css';

type MessageType = {
  id: number;
  message: string;
};

function App() {
  const [message, setMessage] = useState<MessageType[]>([
    { id: 1, message: 'My message 1' },
    { id: 2, message: 'My message 2' },
    { id: 3, message: 'My message 3' },
  ]);

  return (
    <div className='App'>
      <div>
        <div>
          <Input />
        </div>
        <br />

        {message.map(m => (
          <div key={m.id}>{m.message}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
