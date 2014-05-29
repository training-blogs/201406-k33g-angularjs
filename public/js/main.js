var booksApp = angular.module("booksApp", []);

booksApp.controller("MainCtrl", function($scope, $http, Models) {
    $scope.books = null;
    $scope.levels = Models.levels();

    $scope.getAllBooks = function() {
        $http.get("books").success(function(data) {
            $scope.books = data;
        });
    };

    $scope.createBook = function(book) {
        $http.post("books", book).success(function(data){
            $scope.getAllBooks();
            $scope.book = null;
        });
    };

    $scope.getAllBooks();
});

booksApp.factory("Models", function() {
    var levels = function() {
        return [
            "très bon", "bon", "débutant"
        ];
    };

    return {
        levels: levels
    }
});