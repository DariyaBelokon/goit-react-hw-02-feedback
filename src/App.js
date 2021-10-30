// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/Counter/Counter';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => (
  <>
    <h1>Состояние компонента</h1>
    <Counter initialValue={10} />
  </>
);

export default App;

// import UserProfile from './components/user-profile/user-profile';
// import user from './user-profile.json';

// import Statistics from './components/statistics/statistics';
// import statisticalData from './statistical-data.json';

// import Friends from './components/friends/friends';
// import friends from './friends.json';

// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import transactions from './transactions.json';

// export default function App() {
//   return (
//     <div>
//       <UserProfile
//         name={user.name}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics title="Upload stats" stats={statisticalData} />
//       <Friends friends={friends} />,
//       <TransactionHistory items={transactions} />;
//     </div>
//   );
// }
