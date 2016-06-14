var makeSwingingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeSwingingDancer.prototype = Object.create(makeDancer.prototype);
makeSwingingDancer.prototype.constructor = makeSwingingDancer;

makeSwingingDancer.prototype.oldStep = makeDancer.prototype.step;

makeSwingingDancer.prototype.setPosition = function(top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
  var styleSettings = {
    'border-radius': '50%',
    'border': '20px solid purple'
  };
  
  this.$node.css(styleSettings);
};

makeSwingingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var that = this;
  this.$node.animate({
    top: (that.top + 30) + 'px',

  }, that.timeBetweenSteps / 2, function() {
    that.$node.animate({
      top: (that.top - 30) + 'px',

    }, that.timeBetweenSteps / 2);
  });

  this.$node.animate({
    left: (that.left + 100) + 'px',

  }, that.timeBetweenSteps, function() {
    that.$node.animate({
      left: (that.left - 100) + 'px'

    }, that.timeBetweenSteps);
  });

  this.$node.animate({
    top: (that.top + 30) + 'px',

  }, that.timeBetweenSteps / 2, function() {
    that.$node.animate({
      top: (that.top - 30) + 'px',

    }, that.timeBetweenSteps / 2);
  });

};
