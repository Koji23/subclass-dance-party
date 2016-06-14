var makeExpandingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeExpandingDancer.prototype = Object.create(makeDancer.prototype);
makeExpandingDancer.prototype.constructor = makeBlinkyDancer;

makeExpandingDancer.prototype.oldStep = makeDancer.prototype.step;

makeExpandingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    width: '150%',
    height: '150%'
  }, 500, function() {
    this.$node.css({
      width: '75%',
      height: '75%'
    });
  });
};

