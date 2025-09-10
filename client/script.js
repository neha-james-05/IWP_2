// Global variables
let currentCaptcha = "";
let isLoading = false;

// Generate captcha function
function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captchaDisplay").textContent = captcha;
  return captcha;
}

// Show error message with animation
function showError(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.classList.add('show');
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    errorElement.classList.remove('show');
  }, 5000);
}

// Hide error message
function hideError() {
  const errorElement = document.getElementById('error-message');
  errorElement.classList.remove('show');
}

// Set loading state
function setLoading(loading) {
  isLoading = loading;
  const loginBtn = document.querySelector('.login-btn');
  const loginForm = document.getElementById('loginForm');
  
  if (loading) {
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;
    loginForm.style.pointerEvents = 'none';
  } else {
    loginBtn.classList.remove('loading');
    loginBtn.disabled = false;
    loginForm.style.pointerEvents = 'auto';
  }
}

// Set success state
function setSuccess() {
  const loginBtn = document.querySelector('.login-btn');
  loginBtn.classList.add('success');
  
  setTimeout(() => {
    loginBtn.classList.remove('success');
  }, 2000);
}

// Validate form inputs
function validateForm() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const captchaInput = document.getElementById('captchaInput').value.trim();
  
  if (!username) {
    showError('Please enter your username');
    return false;
  }
  
  if (!password) {
    showError('Please enter your password');
    return false;
  }
  
  if (!captchaInput) {
    showError('Please enter the captcha');
    return false;
  }
  
  return true;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  currentCaptcha = generateCaptcha();
  hideError();
  
  // Add input event listeners for real-time validation
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', hideError);
  });
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  
  if (isLoading) return;
  
  // Hide any previous errors
  hideError();
  
  // Validate form
  if (!validateForm()) {
    return;
  }
  
  // Validate captcha
  const captchaText = document.getElementById('captchaDisplay').textContent;
  const captchaInput = document.getElementById('captchaInput').value.trim();
  
  if (captchaInput !== captchaText) {
    showError('Captcha does not match! Please try again.');
    generateCaptcha(); // Generate new captcha
    document.getElementById('captchaInput').value = '';
    return;
  }
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  
  // Set loading state
  setLoading(true);
  
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Login successful
      setSuccess();
      localStorage.setItem('token', data.token);
      
      // Show success message briefly before redirect
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    } else {
      // Login failed
      showError(data.msg || 'Invalid credentials. Please try again.');
      generateCaptcha(); // Generate new captcha
      document.getElementById('captchaInput').value = '';
    }
  } catch (error) {
    console.error('Login Error:', error);
    showError('Network error. Please check your connection and try again.');
    generateCaptcha(); // Generate new captcha
    document.getElementById('captchaInput').value = '';
  } finally {
    setLoading(false);
  }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Enter key on captcha input should submit form
  if (e.key === 'Enter' && e.target.id === 'captchaInput') {
    document.getElementById('loginForm').dispatchEvent(new Event('submit'));
  }
});

// Add focus effects for better UX
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.style.transform = 'scale(1.02)';
  });
  
  input.addEventListener('blur', function() {
    this.parentElement.style.transform = 'scale(1)';
  });
});


