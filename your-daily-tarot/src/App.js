import React from 'react';
import classes from './App.css';
import Panel from './containers/Panel/Panel';



function App() {
  return (
    <div className="App">
      <div className={classes.AppHeader}>
        <p>App Header</p>
      </div>
      <div className={classes.AppContainer}>
        <Panel />
      </div>
    </div>
  );
}

export default App;
