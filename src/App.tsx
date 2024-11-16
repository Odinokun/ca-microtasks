import { useState } from 'react';
import { SingleBtn } from './components/SingleBtn';
import { SingleInput } from './components/SingleInput';
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
  const [title, setTitle] = useState<string>('');

  const addMessage = (title: string) => {
    const newTask = {
      id: messages.length + 1,
      message: title,
    };
    setMessages([newTask, ...messages]);
  };

  const addMessageHandler = () => {
    if (!title) return;
    addMessage(title);
    setTitle('');
  };

  return (
    <div className='App'>
      <div>
        <div>
          <SingleInput value={title} setTitle={setTitle} />
          <SingleBtn name='Click me' onClick={addMessageHandler} />
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
