import { FC } from 'react';
import { Btn } from './Btn';
import { BanknotesType, MoneyType } from '../App';

type PropsType = {
  currentMoney: MoneyType[];
  filterMoney: (value: BanknotesType) => void;
};

export const Money: FC<PropsType> = ({ currentMoney, filterMoney }) => {
  return (
    <div>
      <div>
        <Btn name='All' callback={() => filterMoney('All')} />
        <Btn name='CAD' callback={() => filterMoney('CAD')} />
        <Btn name='USD' callback={() => filterMoney('USD')} />
      </div>

      <ul>
        {currentMoney.map((item, index) => (
          <li key={index}>
            <span>{item.banknotes}</span> -<span>{item.value}</span> -
            <span>{item.number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
