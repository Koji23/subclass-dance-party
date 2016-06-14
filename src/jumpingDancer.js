var makeJumpingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeJumpingDancer.prototype = Object.create(makeDancer.prototype);
makeJumpingDancer.prototype.constructor = makeBlinkyDancer;

makeJumpingDancer.prototype.oldStep = makeDancer.prototype.step;

makeJumpingDancer.prototype.setPosition = function(top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
  var styleSettings = {
    'border-radius': '50%',
    'background-color': 'lightblue',
    'border': '20px solid lightblue'
  };
  
  this.$node.css(styleSettings);
};

makeJumpingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var that = this;

  this.$node.animate({
    top: (that.top + 50) + 'px'
  }, that.timeBetweenSteps, function() {
    that.$node.animate({
      top: (that.top - 50) + 'px'
    }, that.timeBetweenSteps);
  });
};

