let score={
  wins:0,
  losses:0,
  ties:0
 };

score =JSON.parse(localStorage.getItem('score'));



if(score===null){
  score={
  wins:0,
  losses:0,
  ties:0
 };
}



let isAutoPlaying = false;
let intervalId;


function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function()  {
     
      const playerMove= move1();
      move();
      playmove(playerMove);
    }, 1000);
    isAutoPlaying = true;

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}


let computermove ='';
function move(){
  const randomNumber = (Math.random());

  
  
  if(randomNumber>0 && randomNumber<1/3){
    computermove = 'rock';
  }else if(randomNumber>1/3 && randomNumber<2/3){
    computermove = 'paper';
  }else if(randomNumber>2/3 && randomNumber<1){
  computermove = 'scissor';
  }
  return computermove;
}

let computermove1 ='';
function move1(){
  const randomNumber1 = (Math.random());

  
  
  if(randomNumber1>0 && randomNumber1<1/3){
    computermove1 = 'rock';
  }else if(randomNumber1>1/3 && randomNumber1<2/3){
    computermove1 = 'paper';
  }else if(randomNumber1>2/3 && randomNumber1<1){
  computermove1 = 'scissor';
  }
  return computermove1;
}


function playmove(mymove){
  const move123=mymove;
  let result='';
  let calculation=''
  if(computermove==='rock'){
    if(move123==='rock'){
      calculation ='tie';
    }
    if(move123==='paper'){
      calculation ='win';
    }
    if(move123==='scissor'){
      calculation ='loss';
    }
    result=calculation;
  }

  if(computermove==='paper'){
    if(move123==='rock'){
      calculation ='loss';
    }
    if(move123==='paper'){
      calculation ='tie';
    }
    if(move123==='scissor'){
      calculation ='win';
    }
    result=calculation;
  }

  
  if(computermove==='scissor'){
    if(move123==='rock'){
      calculation ='win';
    }
    if(move123==='paper'){
      calculation ='loss';
    }
    if(move123==='scissor'){
      calculation ='tie';
    }
    result=calculation;
  }
  console.log(result);

  if(result==='win'){
    score.wins +=1;
    scoreHighlight=1;
  }else if(result==='loss'){
    score.losses +=1;
    scoreHighlight=2;
  }else if(result==='tie'){
    score.ties +=1;
    scoreHighlight=3;
  }
  console.log(scoreHighlight);
  if(scoreHighlight===1){
   winSH='score-display-live';
   lossSH='score-display';
   tieSH='score-display';
  }else if(scoreHighlight===2){
    winSH='score-display';
    lossSH='score-display-live';
    tieSH='score-display';
   }else if(scoreHighlight===3){
    winSH='score-display';
    lossSH='score-display';
    tieSH='score-display-live';
   }
  
  
  localStorage.setItem('score',JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-move').innerHTML=` You <img src="${move123}.jpg" alt="" class="move"><img src="${computermove}.jpg" alt="" class="move">Computer`;

  
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`wins: <button class="${winSH}">${score.wins}</button>.... losses:  <button class="${lossSH}">${score.losses}</button>.... ties:<button class="${tieSH}">${score.ties}</button>`;
}

function titleChange(titleMove,titleMove1,titleMove2){
  document.querySelector(`.title-${titleMove}`).classList.add('title-live');
  document.querySelector(`.title-${titleMove1}`).classList.remove('title-live');
  document.querySelector(`.title-${titleMove2}`).classList.remove('title-live');
}
