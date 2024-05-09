import { useState } from 'react';
import { Header } from './components';

export const App = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  console.log(categories);

  return (
    <>
      <Header />
      <main>
        <ol>
          {categories.map((category, i) => {
            return <li key={i}>{category}</li>;
          })}
        </ol>
      </main>
    </>
  );
};
