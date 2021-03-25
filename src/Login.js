import React, { useState } from 'react';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('hello world');
  };
  return (

    <div
      className="main"
    >

      <div className="login">
        <div className="welcome">

          <h5>Nice to See you again</h5>
          <h2>WELCOME BACK</h2>
          <div />
        </div>
        <form className="form-control loginForm" onSubmit={handleSubmit}>
          <div className="form-input">
            <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
            <label htmlFor="email" id="email">EMAIL ADDRESS</label>
            <input type="email" style={{ border: 'none' }} placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-input">
            <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
            <label htmlFor="password" id="password"> PASSWORD</label>
            <input type="password" style={{ border: 'none' }} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

    </div>

  );
}
export default Login;
