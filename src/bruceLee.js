var makeBruceLee = function(top, left, timeBetweenSteps) {
  makeSwingingDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img class="bruce" src="img/characters/bruceLee.png"></img>');
  this.setPosition(top, left);

};

makeBruceLee.prototype = Object.create(makeSwingingDancer.prototype);
makeBruceLee.prototype.constructor = makeBruceLee;
