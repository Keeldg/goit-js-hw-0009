const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Перевірка наявності даних у локальному сховищі
if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = savedData.email;
  formData.message = savedData.message;
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

// Зберігання даних у локальне сховище при введенні в поля форми
form.addEventListener('input', e => {
  if (e.target === emailInput || e.target === messageInput) {
    formData.email = emailInput.value;
    formData.message = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

// Відправка форми
form.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
