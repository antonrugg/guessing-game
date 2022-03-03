let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}



const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = prompt('Enter your first guess!');
let attempts = 1;

while (parseInt (guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess: ');
    } else if (guess < targetNum) {
        guess = prompt('Too low! Enter a new guess: '); 
    } else {
        guess = prompt(`Your guess is ${guess}, which is not higher or lower, please guess a number value:`)
    }
}

if (guess === 'q') {
    console.log('Ok, you quit! ')
} else {
    console.log('congrats you WIN!')
    console.log(`YOU GOT IT. IT TOOK YOU ${attempts} GUESSES`);
}



