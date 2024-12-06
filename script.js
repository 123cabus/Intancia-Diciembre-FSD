
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const errorScreen = document.getElementById('error-screen');


const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const goToRegister = document.getElementById('go-to-register');
const backToLogin = document.getElementById('back-to-login');
const logout = document.getElementById('logout');


const users = JSON.parse(localStorage.getItem('users')) || [];


goToRegister.addEventListener('click', () => {
  loginScreen.classList.add('hidden');
  registerScreen.classList.remove('hidden');
});

backToLogin.addEventListener('click', () => {
  registerScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
});

logout.addEventListener('click', () => {
  errorScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
});

//para que tenga que tener @
function isValidEmail(email) {
  return email.includes('@');
}


registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('reg-username').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!username || !email || !password || !confirmPassword) {
    registerError.textContent = 'Todos los campos son obligatorios.';
    return;
  }

  if (!isValidEmail(email)) {
    alert('Debe ingresar un email válido.');
    return;
  }

  if (password !== confirmPassword) {
    registerError.textContent = 'Las contraseñas no coinciden.';
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  registerError.textContent = '';
  alert('Registro exitoso. Ahora puedes iniciar sesión.');
  registerScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
});


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    loginError.textContent = 'Usuario o contraseña incorrectos.';
    return;
  }

  loginError.textContent = '';
  loginScreen.classList.add('hidden');
  errorScreen.classList.remove('hidden');
});
