angular.module('angularDemo')
    .controller('MainController', ['$scope', '$element', function($scope, $element) {
        var vm = this;
        var registration;

        activate();

        function activate() {
            vm.registration = false;
        }

        $scope.toggleRegistration = function() {
            vm.registration = !vm.registration;
        }

    }
]);
