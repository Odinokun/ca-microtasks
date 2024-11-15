import { useState } from 'react';
import { Input } from './components/Input';
import './App.css';

type MessageType = {
  id: number;
  message: string;
};

function App() {
  const [messages, setMessages] = useState<MessageType[]>([
    { id: 1, message: 'My message 1' },
    { id: 2, message: 'My message 2' },
    { id: 3, message: 'My message 3' },
  ]);

  const addTask = (title: string) => {
    const newTask = {
      id: messages.length + 1,
      message: title,
    };
    setMessages([newTask, ...messages]);
  };

  return (
    <div className='App'>
      <div>
        <div>
          <Input addTask={addTask} />
        </div>
        <br />

        {messages.map(m => (
          <div key={m.id}>{m.message}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
