var makeChuckNorris = function(top, left, timeBetweenSteps) {
  makeJumpingDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img class="chuck" src="img/characters/chuckNorris.png"></img>');


};

makeChuckNorris.prototype = Object.create(makeJumpingDancer.prototype);
makeChuckNorris.prototype.constructor = makeChuckNorris;

makeChuckNorris.prototype.lineUp = function() {
  // this.setPosition()
};
// makeChuckNorris.prototype.setPosition = function(top, left) {
//   makeDancer.prototype.setPosition.call(this, top, left);
//   var styleSettings = {
//     'border-radius': '50%',
//     'border': '1px solid black'
//   };
  
//   this.$node.css(styleSettings);
// };