import $ from 'jquery';

import _ from 'lodash';

// my blueprint
class Game {

  constructor(answer) {
    this.answers = answer;
  }
}

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

let answer = _.sample(answers);

console.log(answer);

// creating my instance
let game = new Game(answer);

let button = $('.button');
let answerArea = $('p');

button.on('click', function (event){
  event.preventDefault();
  answerArea.append(answer);


  console.log(button);





})
setTimeout( function(){
  console.log('game', game);


},1000);
