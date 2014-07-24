angular.module( 'libertyjsApp' ).filter( 'truncateFilter', 
  function () {
    return function ( text, length ) {
      if ( text ) {
        var ellipsis = text.length > length ? '...' : '';
        return text.slice( 0, length ) + ellipsis;
      }
      return text;
    };
  }
);