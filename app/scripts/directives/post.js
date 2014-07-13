(function(){
  'use strict';

  angular.module( 'libertyjsApp' )
  .directive( 'post', [ function() {
    return {
      restrict: 'E',
      scope : true,
      templateUrl: 'views/post.html'
    };
  }]);

}());
