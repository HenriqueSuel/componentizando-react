import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  const [genderId, setGenderId] = useState<number>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar onSelectGender={(id) => setGenderId(id)} />
      <Content selectedGenreId={genderId} />
    </div>
  )
}