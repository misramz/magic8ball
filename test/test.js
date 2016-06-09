// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Game } from '../src/js/classes';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of Something', function () {

    it('should exist after we create it', function () {
      let game = new Game();
      expect(game).to.be.an.instanceof(Game);
    });

  });


});
