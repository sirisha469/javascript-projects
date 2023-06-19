
const val =document.querySelector('.js-button');
console.log(val.classList.contains('js-button'));//true or false

const val1 =document.querySelector('.js-button');
console.log(val1.classList.contains('js-but'));//true or false

function toggle(className){
  const button = document.querySelector(className);
  if(!button.classList.contains('is-toggled')){
  button.classList.add('is-toggled');
  }else{
    button.classList.remove('is-toggled');
  }
}

function toggleExtension(className){
  const button = document.querySelector(className);
  if(!button.classList.contains('is-toggled')){

  turnOffPreviousButton();
  button.classList.add('is-toggled');
  }else{
    button.classList.remove('is-toggled');
  }
}

function   turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');
  console.log(previousButton);
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
} 

function amazonCalculation(){
  const element = document.querySelector('.js-input-value');
  let cost = Number(element.value);

  document.querySelector('.js-cal')
          .innerHTML = '';
  document.querySelector('.js-error')
          .innerHTML = '';

  if(cost < 0){
    document.querySelector('.js-error').innerHTML = 'Error: cost cannot be less than $0';

    return;
  }
  if(cost < 40){
    cost+=10;
  }
  document.querySelector('.js-cal').innerHTML = `$${cost}`;
  
}
