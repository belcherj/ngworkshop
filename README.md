LibertyJS-AngularJS-Workshop
============================

AngularJS Workshop to be presented at LibertyJS http://libertyjs.com/ 

The workshop is intended to be an introduction to AngularJS and take a person from creating their first app to understanding the core concepts behind Angular.  The workshop will be comprised of several short interactive talks that will guide the attendee to getting started with AngularJS.

Prerequisites
-------------
Firefox

AngularJS in a Nutshell - 20 to 30 minutes
-------------------------------------------------

This talk will explain some of the core concepts of AngularJS through a couple codepens or jsfiddles.  These core concepts to include two-way data binding, $scope, core directives ( ng-repeat).

AngularJS Controllers, Directives and Filters Ohh My - 20 to 30 minutes
------------------------------------------------------------------------------

Walk through the example app that was created in the last talk and explain how controllers are used and how they interact with views.  Create a Controller and a View and show how they interact. Next show the use of a built in Directive and a Filter.  Create a simple directive and show it implemented in a view.  Create a simple filter and show it in a view.

AngularJS Layer in some data! - 20 to 30 minutes
-------------------------------------------------------

Use the app from the last talk and add a service that hits an existing node REST service.  Show how to include the service in a controller.  How to pull down data and how to push it back to the API.

AngularJS Tooling - 20 to 30 minutes
-------------------------------------------------

Take the attendees through installing Yeoman and generator-angular-fullstack.  Show a basic HTML page with AngularJS included and show an example from the previous talk. From there create an Angular application using Yo and show the app in the browser.

Yeoman - http://yeoman.io/
angular-generator - https://github.com/yeoman/generator-angular

AngularJS Testing with Karma - 20 to 30 minutes
------------------------------------------------------

Use the app created in the last talk and write some simple tests against the controllers that were created.  

Using Node
----------
This project includes configuration files for using NodeJS, running a server and running the karma tests

Prerequisites
-------------
<a href="http://nodejs.org/" target="_blank">NodeJS</a>

Once is installed, open a command prompt and navigate to the ngworkshop directory.

## Initial setup ##
Run these commands  
`git config --global url."https://".insteadOf git://  
npm install -g grunt-cli bower karma-cli 
npm install`

## Run the Server ##
Run the command  
`npm start`  
Then open a browser to <a href="http://127.0.0.1:8080/" target="_blank">http://127.0.0.1:8080/</a>

## Run the Tests ##
Run the command  
`npm test`
