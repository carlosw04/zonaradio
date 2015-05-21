/**
 * Created by Carlosw on 4/15/2015.
 */
angular.module('starter.controllers', ['ionic','ngCordova'])

    .controller('AppCtrl1', function($scope, $ionicModal, $timeout) {
        // Form data for the login modal

    })

    .controller('SocialList', function($scope) {
        $scope.Redes = [
            { id:1,title: 'FaceBook', icon: "/android_asset/www/img/facebook_32.png", url:"'http://instagram.com/zonaradiord', '_system', 'location=yes'"},
            { id:2,title: 'Twitter', icon: "/android_asset/www/img/twitter_32.png",url:"'http://instagram.com/zonaradiord', '_system', 'location=yes'"},
            { id:3,title: 'Instagram', icon: "/android_asset/www/img/instagram-icon.png",url:"http://instagram.com/zonaradiord', '_system', 'location=yes" }
        ];
    })

    .controller('SocialCtrl', function($scope, $stateParams) {
    })

    .controller('facebookctrl', function($scope, $stateParams) {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "http://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.0";
            alert(js.src);
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })

    .controller('instagramctrl', function($scope, $ionicPopover) {

        $scope.popover = $ionicPopover.fromTemplateUrl('http://instagram.com/zonaradiord', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });

        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };


    })

    .controller('AppCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.player = function() {
            $rootScope.player();
        }
    }])

    .controller('BrowseCtrl', ['$rootScope', '$scope','AudioSvc',
        function($rootScope, $scope, AudioSvc) {


            $scope.showSubDirs = function () {

                //console.log('fs ', fs);
                // Play the selected file
                AudioSvc.playAudio('http://rs1.domint.net:8006/', function (a, b) {
                    //console.log(a, b);
                    $scope.position = Math.ceil(a / b * 100);
                    //if (a < 0) {
                      //  $scope.stopAudio();
                    //}
                    if (!$scope.$$phase) $scope.$apply();
                });

                $scope.loaded = true;
                $scope.isPlaying = true;
                $scope.name = "ZONA RADIO RD - Sto. Dgo. Rep. Dom.";
                $scope.path = file.fullPath;

                // show the player
                $scope.player();



            };

            $scope.pauseAudio = function () {

                AudioSvc.pauseAudio();
                $scope.isPlaying = false;
                if (!$scope.$$phase) $scope.$apply();
            };
            $scope.resumeAudio = function () {
                AudioSvc.resumeAudio();
                $scope.isPlaying = true;
                if (!$scope.$$phase) $scope.$apply();
            };
            $scope.stopAudio = function () {

                AudioSvc.stopAudio();
                $scope.loaded = false;
                $scope.isPlaying = false;
                if (!$scope.$$phase) $scope.$apply();
            };

        }


    ]);

