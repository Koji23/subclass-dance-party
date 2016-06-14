var makeJumpingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<div class="jumpingDancer"></div>');
  this.setPosition(top, left);
  this.loadMouseEvents();
};

makeJumpingDancer.prototype = Object.create(makeDancer.prototype);
makeJumpingDancer.prototype.constructor = makeJumpingDancer;

makeJumpingDancer.prototype.oldStep = makeDancer.prototype.step;


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

makeJumpingDancer.prototype.loadMouseEvents = function() {
  $(this).click( function(event) {

    console.log('mouseover chuck!');
    // var styleSettings = {
    //   'box-shadow': '30px 30px 10px #888888',
    //   width: '120%',
    //   height: '120%'
    // };
    // this.$node.css(styleSettings);
  });
};