import { useState } from 'react';

function ForgotPassword() {
  const [deliveryMethod, setDeliveryMethod] = useState('email');
  const [deliveryData, setDeliveryData] = useState('');
  const [continueClicked, setContinueClicked] = useState(false);
  const [error, setError] = useState(null);

  const handleContinue = () => {
    if (deliveryMethod === 'email' && deliveryData === '') {
      setError('Invalid email');
    } else if (deliveryMethod === 'mobile' && deliveryData === '') {
      setError('Invalid mobile number');
    } else {
      setError(null);
      setContinueClicked(true);
    }
  };

  const handleDropdownChange = (e) => {
    setError(null);
    setDeliveryMethod(e.target.value);
  };

  const handleInput = (e) => {
    setError(null);
    setDeliveryData(e.target.value);
  };

  return (
    <div className="container p-3 component-container-30p">
      <div className="row">
        <div className="col">
          <p className="fs-2">Forgot Password</p>
        </div>
      </div>
      <div className="row">
        <div className="col forgot-input-col">
          <p>We will send a 4 digit code to the email or mobile number</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <select
            onChange={handleDropdownChange}
            value={deliveryMethod}
            className="form-input forgot-form-dropdown"
          >
            <option value="email">Email</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div className="col">
          <input
            type="text"
            value={deliveryData}
            onChange={handleInput}
            className="form-input"
          />
        </div>
      </div>
      {error && <div className="row my-3">
        <p className="text-error-color">{error}</p>
      </div>
      }
      <div className="row my-3">
        <div className="col">
          <button className="form-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
      {continueClicked && (
        <>
          <div className="row">
            <div className="col text-center text-accent-color">
              <p>Code has been sent to the mentioned email</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col centered-col">
              <button className="form-button-outline">Resend Code</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
