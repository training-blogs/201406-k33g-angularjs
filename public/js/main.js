var booksApp = angular.module("booksApp", []);

var MainCtrl = booksApp.controller("MainCtrl", function($scope) {
    $scope.books = [
        {
            title: "Backbone c'est de la balle",
            description: "tutorial bb",
            level: "très bon"
        },
        {
            title: "React ça dépote",
            description: "se perfectionner avec React",
            level: "bon"
        },
        {
            title: "J'apprends Angular",
            description: "from scratch",
            level: "débutant"
        }
    ];
});