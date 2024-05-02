import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [profile, setProfile] = useState({
    name: "John Doe",
    mobileNo: "9876543210",
    position: "Manager",
    age: 34
  })

  function handleOnclick() {
    setProfile(prevProfile=>({
      ...prevProfile,age:(profile.age+1)
    }))
  }

  return (
    <div className="App">
      <h1>Hello, my name is {profile.name} and my contact number is {profile.mobileNo}' in h1 tag </h1>

      <p>I am {profile.age} years old and I am working here as {profile.position}</p>

      <button onClick={handleOnclick}>+1</button>

    </div>
  );
}

export default App;
