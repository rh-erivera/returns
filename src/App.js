import React from 'react';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <div 
        className={ open ? "show-outline container" : "container"} 
        onClick={() => { setOpen(!open); }}>
        <img className="cloud" src="/cloud.png" />
        <div className="check-box">
            <img 
              className={open ? "open check-mark" : "closed check-mark"} 
              src="/checkMark.svg" />
        </div>
      </div>
    </div>
  );
}


export default App;
