let msg = "Welcome to Guess what number I'm thinking";
console.log(msg);

//  declarations
let msg1 = document.getElementById('p_message_1');
let msg2 = document.getElementById('p_message_2');
let msg3 = document.getElementById('p_message_3');
let msg4 = document.getElementById('p_message_4');
let answer = Math.floor(Math.random() * 100) + 1;
let num_of_guesses = 0;
let guessed_num_list = [];

// logics

function logic(user_guess, answer) {
  if (user_guess < answer) {
    msg3.textContent = 'Guess is Low';
    msg1.textContent = 'Number of guess:' + num_of_guesses;
    msg2.textContent = 'Guessed Number:' + guessed_num_list;
  } else if (user_guess > answer) {
    msg3.textContent = 'Guess is High';
    msg1.textContent = 'Number of guess:' + num_of_guesses;
    msg2.textContent = 'Guessed Number:' + guessed_num_list;
  } else if ((user_guess = answer)) {
    msg4.textContent = 'You guessed it right';
    msg1.textContent = 'Total guess:' + num_of_guesses;
    msg2.textContent = 'Guessed Number:' + guessed_num_list;
  }
}

function guess() {
  let user_guess = document.getElementById('txt_number_guessed').value;

  if (user_guess < 1 || user_guess > 100) {
    alert('Please Enter between 1-100');
  } else {
    guessed_num_list.push(user_guess);
    num_of_guesses += 1;
    logic(user_guess, answer);
  }
}
