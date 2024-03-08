import React, { useState } from 'react';

const MobileOtpLogin = () => {
  const [formData, setFormData] = useState({ mobile: '', otp: '' });
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (otpSent) {
        // Verify OTP using fetch
        response = await fetch('http://localhost:8080/api/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mobile: formData.mobile,
            otp: formData.otp,
          }),
        });
      } else {
        // Send OTP using fetch
        response = await fetch('http://localhost:8080/api/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mobile: formData.mobile,
          }),
        });
        // Set state to show OTP input field
        setOtpSent(true);
      }

      const responseData = await response.json();
      console.log(responseData);

      // Handle successful verification or OTP sending
      if (response.ok) {
        console.log('OTP Verified. Log the user in here.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setErrors({ general: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div>
      <h2>Mobile OTP Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile Number:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </label>

        {errors.mobile && <p>{errors.mobile}</p>}

        {otpSent && (
          <label>
            OTP:
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
              pattern="[0-9]{6}"
            />
          </label>
        )}

        {errors.otp && <p>{errors.otp}</p>}

        {errors.general && <p>{errors.general}</p>}

        <button type="submit">
          {otpSent ? 'Verify OTP' : 'Send OTP'}
        </button>
      </form>
    </div>
  );
};

export default MobileOtpLogin;
