'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener("click", function(){
    const guess = Number((document.querySelector('.guess').value));
    
    if(!guess){
        document.querySelector('.message').textContent = "⛔ No Number!";
    }else if(guess == secretNumber){
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess > secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = "📈 Too high";
            document.querySelector('.score').textContent = --score;
        }else{
            document.querySelector('.message').textContent = "🧨 You lost the Game!";
        } 
    }else if(guess < secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = "📉 Too low";
            document.querySelector('.score').textContent = --score;
        }else{
            document.querySelector('.message').textContent = "🧨 You lost the Game!";
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "💭 Start guessing...";
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});