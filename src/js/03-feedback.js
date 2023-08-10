// import throttle from 'lodash.throttle';

// const feedbackForm = document.querySelector('.feedback-form');
// const emailInput = feedbackForm.querySelector('input[name="email"]');
// const messageInput = feedbackForm.querySelector('textarea[name="message"]');


// const saveFeedbackToLocalStorage = throttle(() => {
//     const feedbackState = {
//       email: emailInput.value,
//       message: messageInput.value,
//     };
//     localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
//   }, 500);
  
//   emailInput.addEventListener('input', saveFeedbackToLocalStorage);
//   messageInput.addEventListener('input', saveFeedbackToLocalStorage);
  

// document.addEventListener('DOMContentLoaded', () => {
//     const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
//     if (feedbackState) {
//       emailInput.value = feedbackState.email;
//       messageInput.value = feedbackState.message;
//     }
//   });


// feedbackForm.addEventListener('submit', (event) => {
//     event.preventDefault();
  
//     const feedbackState = {
//       email: emailInput.value,
//       message: messageInput.value,
//     };
  
//     console.log(feedbackState);
  
//     localStorage.removeItem('feedback-form-state');
//     emailInput.value = '';
//     messageInput.value = '';
//   });
  
  


import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFeedbackToLocalStorage = throttle(() => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500);

emailInput.addEventListener('input', saveFeedbackToLocalStorage);
messageInput.addEventListener('input', saveFeedbackToLocalStorage);

document.addEventListener('DOMContentLoaded', () => {
  const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (feedbackState) {
    emailInput.value = feedbackState.email;
    messageInput.value = feedbackState.message;
  }
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Please fill in all fields');
    return;
  }

  const feedbackState = {
    email: emailValue,
    message: messageValue,
  };

  console.log(feedbackState);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
