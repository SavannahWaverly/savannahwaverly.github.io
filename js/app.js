// ********************************************************
// * Begin Sparc AgularJS Implementations
// **********************************************************/
var app = angular.module('connectify', [], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});

//Home Page
(function(){
    app.controller('HomeController', [function($http, $scope) {
    	Parse.initialize(
            "VX3s8iNkDrCcCG0IqTnzvbWnXFCSAhVZm6LeUdKG", 
            "sl0xz5lvRGo1tXaA1Y5wtJtkOYB0TvQuhnP4XEQs"
        );
        
        Parse.User.enableRevocableSession();

        var Post = Parse.Object.extend("Post");
        var query = new Parse.Query(Post);
        query.equalTo("author", "Sarah");
        query.descending("createdAt");
        query.first({
          success: function(post) {
            $("#message").text(post.get('message'));
            $("#author").text(post.get('author'));
          },
          error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
          }
        });

    }]);
	
})();

//Dashboard Page
(function(){
    app.controller('DashboardController', [function($http, $scope) {
        
	}]);
})();

//Index Page
(function(){
    app.controller('IndexController', [function($http, $scope) {
        
	}]);
})();

//Login Page
(function(){
    app.controller('LoginController', [function($http, $scope) {
        
	}]);
})();