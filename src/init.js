$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    //save dancer in dancers array
    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      var top = 500;
      var left = dancer.left;
      //animation positions
      dancer.top = top;
      dancer.left = left;
      //css positions
      dancer.$node.clearQueue();
      dancer.setPosition(top + 'px', left + 'px');
    });  
  });

  $(document).on('mouseover', '.chuck', function(event) {
    var styleSettings = {
      '-webkit-filter': 'drop-shadow(30px 30px 10px #000)',
    };
    $(this).css(styleSettings);
  });

  var checkCollisions = function() {
    var dancerCount = window.dancers.length;
    for (var i = 0; i < dancerCount; i++) {
      var dancerA = window.dancers[i].$node.position();
      for (var j = i + 1; j < dancerCount; j++) {
        var dancerB = window.dancers[j].$node.position();
        var leftDiff = dancerA.left - dancerB.left;
        var topDiff = dancerA.top - dancerB.top;
        var distance = Math.sqrt(Math.pow(leftDiff, 2) + Math.pow(topDiff, 2));
        console.log(distance);
        if (distance < 100) {
          var midLeft = dancerB + leftDiff / 2;
          var midTop = dancerB + topDiff / 2;
          //drop a pow! 
        }
      }
    }
    setTimeout(checkCollisions, 250);
  };
  checkCollisions();

});

