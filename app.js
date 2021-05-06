
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;


//UI vars
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = 1;
maxNum.textContent = 10;

game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})


// listen for vars
guessBtn.addEventListener('click', function() {

    let guess = parseInt(guessInput.value);
    

    //validate result
    if(isNaN(guess) || guess > max || guess < min){
       return setMessage(`Please enter a number between ${min} & ${max}`, 'red')
    }
    

     if(guess === winningNum){

        //Disable Input
     //   guessInput.disabled = true;

        //Border UI color
      //  guessInput.style.borderColor = 'green';

       // setMessage(`${guess} is correct, YOU WIN!`, 'green')

       gameOver(true, `${guess} is correct, YOU WIN!`, 'green');
    }
    else {

        guessLeft -= 1;

        if( guessLeft === 0  ) {

            gameOver(false, `Game over, You lost bitch!, The correct answer is ${winningNum}`);

        } else {
           
            guessInput.style.borderColor = 'red';

            guessInput.value = '';

            setMessage(`${guess} is not correct, ${guessLeft} guess are left`, 'red')
        }
    } 
 
})

function gameOver(won, msg) {

    let color;

    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;

    //Border UI color
    guessInput.style.borderColor = color;

    setMessage(msg, color);

    guessBtn.value = 'Play Again ?';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    let y = Math.floor(Math.random()*(max + min -1) + min);
    console.log(y);
    return y;
    
}


//Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}