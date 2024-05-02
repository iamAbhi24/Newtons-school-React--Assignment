import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  function handleClick() {
      if(!show){
        setShow(true)
        return;
      }
      setShow(false)
  }

return (
  <div className="App">
    <h1>Toggle Text</h1>
    <button onClick={handleClick} >Show Text</button>
    {show && (<p className='text'>This is the hidden text</p>)}
  </div>
);
}
export default App;
