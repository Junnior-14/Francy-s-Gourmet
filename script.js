const $btnSignIn= registro.querySelector('.sign-in-btn'),
      $btnSignUp = registro.querySelector('.sign-up-btn'), 
      $signUp = registro.querySelector('.sign-up'),
      $signIn = re. querySelector('.sign-in');

registro.addEventListener('click', e => {
   if (e.target === $btnSignIn || e.target === $btnSignUp) {
      $signIn.classList.toggle('active');
       $signUp.classList.toggle('active')
       }
});