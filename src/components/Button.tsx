import { FC } from 'react';

type PropsType = {
  name: string;
  callBack: () => void;
};

export const Button: FC<PropsType> = ({ name, callBack }) => {
  const onClickHandler = () => {
    callBack();
  };

  return (
    <div>
      <button onClick={onClickHandler}>{name}</button>
    </div>
  );
};
