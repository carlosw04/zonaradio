// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myapp= angular.module('cosita', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



myapp.controller('MainController',function($scope, $ionicLoading) {
 
       $scope.play = function(src,vBul) {
        var media = new Media(src, mediaStatusCallback, mediaStatusCallback, mediaStatusCallback);

        alert("Estoy aqui " + " con este " + vBul);
        if(vBul==null)
        {
            media.play();
            $scope.media= media;
        //$cordovaMedia.play(media);
        }
        else{
            alert("Stop " + media);
        media.stop();
    }//end stop
        
         
       
       
        
    };
    //end play
   
   
    
    var mediaStatusCallback = function(status) {
        $scope.statusmedia = status;
        if(status == Media.MEDIA_STARTING) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }; //end mediaStatusCallBack 
    
});

/*.controller('LoadingCtrl', function($scope, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
});

