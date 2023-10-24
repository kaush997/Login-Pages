import { useState } from 'react';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setError(null);

    if (e.target.name === 'password') {
      setPassword(e.target.value);
      if (e.target.value.length < 8) {
        setError('length');
      }
    }

    if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    }
  };

  const handleReset = () => {
    if (password !== confirmPassword) {
      setError('no-match');
    }
  };

  return (
    <div className="container p-3 component-container-20p">
      <div className="row my-3">
        <div className="col">
          <p className="fs-2">Reset Password</p>
        </div>
      </div>
      {error === 'no-match' &&
        <div className="row my-3">
          <div className="col">
            <p className="text-error-color">
              No match between passwords. Try again!
            </p>
          </div>
        </div>
      }
      <div className="row mt-3">
        <div className="col">
          <p>New Password <span className="text-error-color">*</span></p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="password"
            className="form-input"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </div>
      </div>
      {error === 'length' &&
        <div className="row my-3">
          <div className="col">
            <p className="text-error-color">
              At least 8 characters needed
            </p>
          </div>
        </div>
      }
      <div className="row mt-3">
        <div className="col">
          <p>Confirm Password <span className="text-error-color">*</span></p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="password"
            className="form-input"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <button className="form-button" onClick={handleReset}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
