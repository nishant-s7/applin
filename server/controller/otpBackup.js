// In-memory store for generated OTPs (you should use a database in a real-world scenario)
const otpStore = {};
app.post('/api/send-otp', (req, res) => {
  const { mobile } = req.body;

  // Generate a random 6-digit OTP
  const otp = otpGenerator.generate(6, { digits: true, upperCase: false, specialChars: false, alphabets: false });

  // Store the OTP for verification
  otpStore[mobile] = otp;

  // In a real-world scenario, you would send this OTP to the user's mobile number using SMS

  console.log(`OTP sent to ${mobile}: ${otp}`);

  res.json({ message: 'OTP sent successfully' });
});

// Endpoint to verify the provided OTP
app.post('/api/verify-otp', (req, res) => {
  const { mobile, otp } = req.body;

  // Check if the provided OTP matches the stored OTP
  if (otpStore[mobile] && otp === otpStore[mobile]) {
    // Clear the OTP from the store after successful verification (you might want to set an expiration time)
    delete otpStore[mobile];

    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ error: 'Invalid OTP' });
  }
});