import { ChangeEvent, FC } from 'react';

type PropsType = {
  value: string;
  setTitle: (title: string) => void;
};

export const SingleInput: FC<PropsType> = ({
  value,
  setTitle,
  ...restProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return <input value={value} onChange={onChangeHandler} />;
};
