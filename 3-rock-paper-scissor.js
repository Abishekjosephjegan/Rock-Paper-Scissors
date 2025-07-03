let score = JSON.parse(localStorage.getItem('score'));

      if (score === null){
        score ={
          win : 0,
          lose : 0,
          tie : 0
        }
      }

      updateScore();

      let isAutoPlaying;
      let intervalId;

     document.querySelector('.js-auto-play-button').addEventListener('click', () => {
      autoPlay();
     });

      
     function autoPlay(){
       if (!isAutoPlaying) {
        intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000); 
        isAutoPlaying = true;
       } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
       }
      } 

      document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
          playGame('Rock');
        });

      document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGame('Paper');
      });

      document.querySelector('.js-scissors-button')
        .addEventListener('click', () => {
          playGame('Scissors');
        });

      document.body.addEventListener('keydown', event => {
        if(event.key === 'r'){
          playGame('Rock');
        } else if (event.key === 'p'){
          playGame('Paper');
        } else if (event.key === 's'){
          playGame('Scissors');
        }
      })

      function playGame(playerMove){
        const computerMove = pickComputerMove();
      
        let result = '';

       if (playerMove === 'Rock'){
        if(computerMove === 'Rock'){
          result = 'Tie';
        } else if(computerMove === 'Paper'){
          result = 'you lose';
        } else if(computerMove === 'scissors'){
          result = 'you win';
        }
        }
        else if (playerMove === 'Paper'){
         if(computerMove === 'Rock'){
           result = 'you win';
         } else if(computerMove === 'Paper'){
           result = 'tie';
         } else if(computerMove === 'scissors'){
           result = 'you lose';
        }
       } 
       else if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
          result = 'you lose';
        } else if(computerMove === 'Paper'){
          result = 'you win';
        } else if(computerMove === 'scissors'){
          result = 'tie';
       }
      }
       if(result === 'you win'){
        score.win += 1;
      } else if(result === 'you lose'){
        score.lose += 1;
      } else if(result === 'tie'){
        score.tie += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      document.querySelector('.js-result').innerHTML = `${result}.`;

      document.querySelector('.js-move').innerHTML = `you <img src="GameImages/${playerMove}-emoji.png" class="move-icon">-<img src="GameImages/${computerMove}-emoji.png" class="move-icon"> Computer`;
       
      updateScore();
     }

    function updateScore() {
      document.querySelector('.js-score').innerHTML = `win : ${score.win}, lose : ${score.lose}, tie : ${score.tie}`;
    }

      function pickComputerMove(){
        const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber <= 1/3){
     computerMove = 'Rock';
    } else if(randomNumber >= 1/3 && randomNumber <= 2/3) {
     computerMove = 'Paper';
    } else if(randomNumber >= 2/3 && randomNumber <= 1){
     computerMove = 'scissors';
    } 
     console.log(computerMove); 
      
    return computerMove;
    }