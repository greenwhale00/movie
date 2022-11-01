import React from "react";
import List from './List';
import './common.scss'

function App() {
  return (
    <div className="App">
      <List genre='Drama' limit={20} />
      <List genre='Action' limit={20} />
      <List genre='horror' limit={20} />
    </div>
  );
}

export default App;
