import $ from 'jquery';

import _ from 'lodash';


import { Game } from '../src/js/classes';

// my blueprint

let answers = [
  'Yes',
  'No',
  'Not sure',
  'Absolutly not',
  'Ask BenjiBoy',
  'Uh Huh',
  'Most Definitely',
  'Absolutly'
];

function createNewGame() {
  let answer = _.sample(answers);
  let game = new Game(answer);
  console.log(game);
  return answer;
}

// on page load
createNewGame();


let button = $('.button');
let answerArea = $('p');

button.on('click', function (event){
  event.preventDefault();
  answerArea.empty();
  let answer = createNewGame();
  setTimeout( function() {
    answerArea.append(answer);
  }, 1000);


  console.log(button);





});
