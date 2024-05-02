import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleUsername(e) {
    setUserName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !password || !email) {
      setError("All Fields must be filled");
      return;
    }
    if (!email.includes("@")) {
      setError("Email is inValid");
      setSuccess('');
      return;
    }
    if (userName && password && email) {
      setSuccess("No Error Found Congrats the user is logged in");
      setError('');
      return;
    }
  }


  return (
    <div className="App">
      <form  onSubmit={handleSubmit} noValidate>
        <input type="text" id="username" name="username" placeholder="Username" onChange={handleUsername} value={userName} /> <br />
        <input type="password" id="password" name="password" placeholder="Password" onChange={handlePassword} value={password} /> <br />
        <input type="email"  name="email" id="email" placeholder="Email" onChange={handleEmail} value={email} /><br />
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {success && <span style={{ color: 'green' }}>{success}</span>} <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
