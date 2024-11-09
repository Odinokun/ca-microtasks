import { useState } from 'react';
import './App.css';
import { Money } from './components/Money';

export type BanknotesType = 'USD' | 'CAD' | 'All';

export type MoneyType = {
  banknotes: BanknotesType;
  value: number;
  number: string;
};

function App() {
  // const [money, setMoney] = useState<MoneyType[]>([
  //   { banknotes: 'USD', value: 100, number: ' a1234567890' },
  //   { banknotes: 'USD', value: 50, number: ' z1234567890' },
  //   { banknotes: 'CAD', value: 100, number: ' w1234567890' },
  //   { banknotes: 'USD', value: 100, number: ' e1234567890' },
  //   { banknotes: 'USD', value: 50, number: ' c1234567890' },
  //   { banknotes: 'CAD', value: 100, number: ' r1234567890' },
  //   { banknotes: 'USD', value: 50, number: ' x1234567890' },
  //   { banknotes: 'CAD', value: 50, number: ' v1234567890' },
  // ]);
  const money: MoneyType[] = [
    { banknotes: 'USD', value: 100, number: ' a1234567890' },
    { banknotes: 'USD', value: 50, number: ' z1234567890' },
    { banknotes: 'CAD', value: 100, number: ' w1234567890' },
    { banknotes: 'USD', value: 100, number: ' e1234567890' },
    { banknotes: 'USD', value: 50, number: ' c1234567890' },
    { banknotes: 'CAD', value: 100, number: ' r1234567890' },
    { banknotes: 'USD', value: 50, number: ' x1234567890' },
    { banknotes: 'CAD', value: 50, number: ' v1234567890' },
  ];
  const [filter, setFilter] = useState<BanknotesType>('All');

  const filterMoney = (value: BanknotesType) => {
    setFilter(value);
  };

  let currentMoney = money;
  if (filter === 'USD') {
    currentMoney = money.filter(item => item.banknotes === 'USD');
  } else if (filter === 'CAD') {
    currentMoney = money.filter(item => item.banknotes === 'CAD');
  }

  return (
    <div className='App'>
      <Money
        currentMoney={currentMoney}
        filterMoney={(value: BanknotesType) => filterMoney(value)}
      />
    </div>
  );
}

export default App;
