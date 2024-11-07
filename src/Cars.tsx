import { FC } from 'react';

type PropsType = {
  cars: CarType[];
};

type CarType = {
  manufacturer: string;
  model: string;
};

export const Cars: FC<PropsType> = ({ cars }) => {
  return (
    <table>
      {cars.map((car, index) => (
        <tr key={index + car.model}>
          <th>{car.manufacturer}</th>
          <th>{car.model}</th>
        </tr>
      ))}
    </table>
  );
};
