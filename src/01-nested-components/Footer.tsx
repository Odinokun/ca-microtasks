import { FC } from 'react';

type PropsType = {
  title: string;
};

export const Footer: FC<PropsType> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
