import { useState } from 'react';
import './App.css';
import { Btn } from './components/Btn';

type BanknotesType = 'USD' | 'CAD' | 'All';

type MoneyType = {
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
  const money = [
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
    </div>
  );
}

export default App;
