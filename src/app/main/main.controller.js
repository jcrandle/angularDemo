angular.module('angularDemo')
    .controller('MainController', ['MainService', function(MainService) {
        
        var self = this;

        self.registration = false;
        self.phoneTypes = ['Commercial', 'Secret'];
        self.phoneType = "Phone Type" //Default value and label
        self.message = null;

        activate();

        function activate() {
        }

        self.toggleRegistration = function() {
            self.registration = !self.registration;
        }

        self.setPhoneType = function(type) {
            self.phoneType = type;
        }

        self.signIn = function() {
            var form = {
                username: self.username,
                password: self.password
            }
            MainService.signIn(form).then(function(response) {
                self.message = response;
            });
        }
    }
]);
