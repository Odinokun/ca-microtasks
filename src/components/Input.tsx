import { FC, useState, KeyboardEvent, ChangeEvent } from 'react';

type PropsType = {
  addMessage: (title: string) => void;
};

export const Input: FC<PropsType> = ({ addMessage, ...restProps }) => {
  const [title, setTitle] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const addMessageHandler = () => {
    if (!title) return;
    addMessage(title);
    setTitle('');
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addMessageHandler();
  };

  return (
    <>
      <input
        value={title}
        onChange={onChangeHandler}
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={addMessageHandler}>Click me</button>
    </>
  );
};
