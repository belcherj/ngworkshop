(function(){
  'use strict';

  angular.module('libertyjsApp')
  .controller('MainCtrl', function ( $scope, PostsService ) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.lotsOfText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec ultrices ante. Vivamus tempor pretium augue, sed lobortis orci viverra in. Aenean lobortis diam justo. Etiam congue dictum quam ac blandit. Nullam convallis dui a ipsum ornare, non fringilla sem laoreet. Donec id lectus sed neque posuere aliquam. Nunc nibh nisi, porttitor et enim eu, ultricies rutrum enim. Quisque in tristique risus, sed luctus sem. Vestibulum ultrices ultrices facilisis. Nulla consectetur tincidunt dolor sed dignissim.'

    $scope.post = {
      title: 'Hello World',
      body: 'Lorem ipsum dolor sit amet'
    }

    PostsService.get( function( posts ) {
      $scope.posts = posts.data;
    } );

  });

}());
