angular.module("myApp")
  .directive("myDir", function() {
    function getColor() {
      var colors = ["burlywood", "coral", "wheat", "orange", "skyblue", "rebecca-purple", "teal"];
      return colors[Math.floor(Math.random() * colors.length)]
    }

    return {
      restrict: "AE",
      templateUrl: "./mydir.html",
      scope: { //bindings for this directive
        title: '=' //"look 4 smth called 'title' interprate it as a string and call it 'title'."
      }, //as soon as we make an empty object--we create an environment in which this DIR's scope lives
      // NB: now... whenever I try to access some value for this directive -- IT MUST BE EXPLICIT & placed in this object
      link: function(scope, element, attr) {
        element.on('click', function() {
          setInterval(function() {
            element.css("color", getColor());
          }, 500)
        })
      }
    }
  })
