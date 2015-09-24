!function(){"use strict";angular.module("angularDemo",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{key:"handlebars",title:"Handlebars",url:"http://handlebarsjs.com/",description:"Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.",logo:"handlebars.png"}];this.getTec=t}angular.module("angularDemo").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var a=this;a.relativeDate=t(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],a}angular.module("angularDemo").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function a(a,n,e,o){var r,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(t){i.type(t).pause()["delete"]()}),r=a.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),a.$on("$destroy",function(){r()})}function n(t,a){function n(){return e().then(function(){t.info("Activated Contributors View")})}function e(){return a.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],n()}var e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],e}angular.module("angularDemo").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,a){function n(n){function o(t){return t.data}function r(a){t.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return n||(n=30),a.get(e+"/contributors?per_page="+n).then(o)["catch"](r)}var e="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:e,getContributors:n};return o}angular.module("angularDemo").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t,a,n){function e(){r(),t(function(){i.classAnimation="rubberBand"},4e3)}function o(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function r(){i.awesomeThings=a.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1443134812108,i.showToastr=o,e()}angular.module("angularDemo").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("angularDemo").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,a){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),a.otherwise("/")}angular.module("angularDemo").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("angularDemo").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,a){t.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0}angular.module("angularDemo").config(t),t.$inject=["$logProvider","toastrConfig"]}(),angular.module("angularDemo").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-0720a4bb0b.js.map