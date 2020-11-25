let username = document.getElementById('username');
let password = document.getElementById('password');

const form = document.querySelector('form');

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('username: ', username.value);
  console.log('password: ', password.value);
  alert('Submitted, check your console');
};

form.addEventListener('submit', handleSubmit);
