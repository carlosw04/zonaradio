/**
 * Created by Carlosw on 4/14/2015.
 */
angular.module('starter',['ionic','starter.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

.config(function($stateProvider,$urlRouterProvider){
    $stateProvider

        .state('app',{
            url:"/app",
            abstract:true,
            templateUrl:"templates/menu.html",
            controller:'AppCtrl'
        })
        .state('app.redes', {
            url: "/redes",
            views: {
                'menuContent': {
                    templateUrl: "templates/Redes.html"
                }
            }
        })

        .state('app.radio', {
            url: "/radio",
            views: {
                'menuContent': {
                    templateUrl: "templates/Radio.html"
                }
            }
        });
        $urlRouterProvider.otherwise('/app/radio');
    });