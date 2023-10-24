import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setError(false);
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = () => {
    if (username !== 'admin' || password !== 'admin') {
      setError(true);
    }
  };

  return (
   
    <div className="container p-3 component-container-20p " >
      {error && <div className="row my-2 text-center">
          <p className="text-error-color">
            Invalid username or password
          </p>
        </div>
      }
      <div className="row my-2">
        <div className="col">
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            name="username"
            value={username}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <button className='form-link-button'>Forgot password</button>
        </div>
      </div>
      <div className="row my-3 align-items-center">
        <div className="col">
          <input type="checkbox" className="me-2" />Remember me
        </div>
        <div className="col">
          <button className="form-button" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  
  )
}

export default Login;
