import { FC, useState, KeyboardEvent, ChangeEvent } from 'react';

type PropsType = {
  addTask: (title: string) => void;
};

export const Input: FC<PropsType> = ({ addTask, ...restProps }) => {
  const [title, setTitle] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const addTaskHandler = () => {
    if (!title) return;
    addTask(title);
    setTitle('');
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTaskHandler();
  };

  return (
    <>
      <input
        value={title}
        onChange={onChangeHandler}
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={addTaskHandler}>Click me</button>
    </>
  );
};
