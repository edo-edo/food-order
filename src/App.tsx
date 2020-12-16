import React, { useState } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Foods from './container/Foods';
import classes from './App.css';

const App: React.FC = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(true);
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  return (
    <div className={classes.App}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      { sideDrawerOpen && (
        <>
          <SideDrawer show={sideDrawerOpen} />
          <Backdrop onClick={backdropClickHandler} />
        </>
      ) }
      <main>
        <Foods />
      </main>
    </div>
  );
};

export default App;
