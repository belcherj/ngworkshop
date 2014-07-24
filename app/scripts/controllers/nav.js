angular.module( 'libertyjsApp' ).controller( 'NavCtrl', 
  function ( $scope, $location ) {

    //TODO: ADD THE ABOUT PAGE
    $scope.menu = [
      {
        'title': 'Home',
        'link': '#/'
      }
    ];

    $scope.isActive = function( route ) {
      return route === $location.path();
    };
  }
);


