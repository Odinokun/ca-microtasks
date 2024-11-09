import { FC } from 'react';

type PropsType = {
  name: string;
  callback: () => void;
};

export const Btn: FC<PropsType> = ({ name, callback }) => {
  return <button onClick={callback}>{name}</button>;
};
