angular.module( 'libertyjsApp' ).factory( 'PostsService', 
  function( $http, $resource ) {
    return $resource( 'json/blog.json', {}, {
      query: {
        method:'GET', 
        isArray:true
      }
    } );
  }
);
