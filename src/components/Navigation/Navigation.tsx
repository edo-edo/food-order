import * as React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

interface Titles {
  id:number,
  title: string,
}

const titles: Array<Titles> = [
  {
    id: 1,
    title: 'menu',
  },
  {
    id: 1,
    title: 'contact',
  },
  {
    id: 1,
    title: 'about',
  },
];

const Navigation:React.FC = () => (
  <div>
    <ul>
      {
        titles.map((item) => <NavigationItem key={item.id} title={item.title} />)
      }
    </ul>
  </div>
);

export default Navigation;
