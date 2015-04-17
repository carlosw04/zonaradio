/**
 * Created by Carlosw on 4/15/2015.
 */
angular.module('starter.controllers', ['ionic','ngCordova'])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };

        $scope.playAudio = function(src,$scope,$cordovaMedia){

            alert(src);

            var my_media = null;
            var mediaTimer = null;

            if (my_media == null) {
                // Create Media object from src
                my_media = new Media(src, onSuccess, onError);
            } // else play current audio
            // Play audio
            my_media.play();

            $scope.my_media = my_media;

            // Update my_media position every second
            if (mediaTimer == null) {
                $scope.mediaTimer = setInterval(function() {
                    // get my_media position
                    $scope.my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }

        };
        // Stop audio
        //
        $scope.stopAudio = function() {
            alert("stop" + $scope.my_media);
            if ($scope.my_media) {
                $scope.my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        };
        // Pause audio
        //
        $scope.pauseAudio = function() {
            if ($scope.my_media) {
                $scope.my_media.pause();
            }
        };
    })

    .controller('SocialList', function($scope) {
        $scope.Redes = [
            { id:1,title: 'FaceBook', icon: "/android_asset/www/img/facebook_32.png" },
            { id:2,title: 'Twitter', icon: "/android_asset/www/img/twitter_32.png" },
            { id:3,title: 'Instagram', icon: "/android_asset/www/img/instagram-icon.png" }
        ];
    })

    .controller('SocialCtrl', function($scope, $stateParams) {
    })

    .controller('facebookctrl', function($scope, $stateParams) {



    })

    .controller('Radio', function($scope) {
        $scope.playAudio = function(src){

            $scope.my_media = null;

            $scope.mediaTimer = null;

            alert(src);
            if ($scope.my_media == null) {
                // Create Media object from src
                $scope.my_media = new Media(src, onSuccess, onError);
            } // else play current audio
            // Play audio
            $scope.my_media.play();

            // Update my_media position every second
            if ($scope.mediaTimer == null) {
                $scope.mediaTimer = setInterval(function() {
                    // get my_media position
                    $scope.my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }

        };
    });