import React, { useState } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import classes from './App.css';

const App: React.FC = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

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
        <p>main app</p>
      </main>
    </div>
  );
};

export default App;
