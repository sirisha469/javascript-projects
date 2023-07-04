/*const score = {
        wins: 0,
        loses: 0,
        ties: 0
      };
      */

      let score = JSON.parse(localStorage.getItem('score')) || { wins:0, loses:0, ties:0};

      updateScoreElement();

      //console.log(JSON.parse(localStorage.getItem('score')));//score is in string format convert to string using JSON

      /*
      if(!score){
        score = {
          wins: 0,
          loses: 0,
          ties: 0
        };
      }
      */
     console.log(score);

     let isAutoPlaying = false;
     let intervalId;

    // arrow function
    //  const autoPlay = () => {

    //  };
     function autoPlay(){
      if(!isAutoPlaying){
        //arrow function is used
        intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000); //1sec
        isAutoPlaying = true;
      }
      else{
        clearInterval(intervalId);
        isAutoPlaying = false;
      } 
     }

    document.querySelector('.js-rock-button'). addEventListener('click', () => {
      playGame('Rock');
    });

    document.querySelector('.js-paper-button').addEventListener('click', () => {
      playGame('Paper');
    });

    document.querySelector('.js-scissors-button').addEventListener('click', () => {
      playGame('Scissors');
    });

    document.body.addEventListener('keydown', (event) =>{
      if(event.key === 'r'){
        playGame('Rock');
      }else if(event.key === 'p'){
        playGame('Paper');
      }else if(event.key === 's'){
        playGame('Scissors');
      }
    });

    
    function playGame(playerMove){
      
      const computerMove = pickComputerMove();
      let result='';
      //console.log(computerMove);
      if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
          result='You lose.';
        }else if(computerMove === 'Paper'){
          result = 'You win.';
        }else if(computerMove === 'Scissors'){
          result = 'Tie.';
        }
      }
      else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
          result='You win.';
        }else if(computerMove === 'Paper'){
          result = 'Tie.';
        }else if(computerMove === 'Scissors'){
          result = 'You lose.';
        }
      }
      else if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
        result='Tie.';
        }else if(computerMove === 'Paper'){
          result = 'You lose.';
        }else if(computerMove === 'Scissors'){
          result = 'You win.';
        }

      }

      if(result === 'You win.'){
        score.wins+=1;
      } else if(result === 'You lose.'){
        score.loses+=1;
      }else if(result === 'Tie.'){
        score.ties+=1;
      }

      localStorage.setItem('score', JSON.stringify(score)); //here msg is string. converting score(num) to string using JSON 

      updateScoreElement();

      document.querySelector('.js-result')
      .innerHTML = result;
      
      document.querySelector('.js-moves')
      .innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;

//         alert(`Your move ${playerMove}. Computer move ${computerMove}. ${result}
// wins:${score.wins} loses:${score.loses} Ties:${score.ties}`);

    }

    function updateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML = `wins:${score.wins}, loses:${score.loses}, Ties:${score.ties}`;
    }


    function pickComputerMove(){
      const num=Math.random();
      let computerMove='';
      //console.log(num);
      if(num >=0 && num < 1/3){
        computerMove = 'Rock';
      }
      else if(num >= 1/3 && num < 2/3 ){
        computerMove = 'Paper';
      }else if(num >=2/3 && num < 1){
        computerMove = 'Scissors';
      }
      return computerMove;
    }
    