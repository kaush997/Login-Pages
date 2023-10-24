import { Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerificationCode from './pages/VerificationCode';

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="code" element={<VerificationCode />} />
      </Routes>
    </div>
  );
}

export default App;
