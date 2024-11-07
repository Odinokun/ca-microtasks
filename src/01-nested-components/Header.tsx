import { FC } from 'react';

type PropsType = {
  title: string;
};

export const Header: FC<PropsType> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
