function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captchaDisplay").textContent = captcha;
  return captcha;
}

let currentCaptcha = "";

document.addEventListener("DOMContentLoaded", () => {
  currentCaptcha = generateCaptcha();
});


// This replaces the logic inside your existing loginForm event listener
document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Stop the form from reloading the page

  // Your captcha validation logic can remain here
  const captchaText = document.getElementById('captchaDisplay').innerText;
  const captchaInput = document.getElementById('captchaInput').value;
  if (captchaInput !== captchaText) {
    document.getElementById('error-message').innerText = 'Captcha does not match!';
    return;
  }

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Login successful
      errorMessage.innerText = '';
      localStorage.setItem('token', data.token); // Save the token
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
      // Login failed
      errorMessage.innerText = data.msg || 'Login failed. Please try again.';
    }
  } catch (error) {
    console.error('Login Error:', error);
    errorMessage.innerText = 'An error occurred. Please try again later.';
  }
});

// Your generateCaptcha functions remain the same
// ...


