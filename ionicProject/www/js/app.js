// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
	$stateProvider
	.state('tabs',{
		url:'/tabs',
		templateUrl:'templete/tabs.html'
	})
	.state('tabs.home',{
		url:'/home',
		views:{
			'tabs-home':{
				templateUrl:'templete/home.html',
				controller:'homes'
			}
		}
	})
	.state('tabs.detail',{
		url:'/home/:id',
		views:{
			'tabs-home':{
				templateUrl:'templete/detail.html',
				controller:'details'
			}
		}
	})
	.state('tabs.collection',{
		url:'/collection',
		views:{
			'tabs-collection':{
				templateUrl:'templete/collection.html',
				controller:'ctrl'
			}
		}
	})
	.state('tabs.collection.aside',{
		url:'/:id',
		views:{
			'tabs-shoucang':{
				templateUrl:'templete/aside.html',
				controller:'details1'
			}
		}
	})
	.state('tabs.my',{
		url:'/my',
		views:{
			'tabs-my':{
				templateUrl:'templete/my.html'
				
				
			}
		}
	})
	$urlRouterProvider.otherwise('/tabs/home')
	
	
	
	//Modify the tabs of android display position! start
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
})
.controller('homes',function($scope,$http){
		$http({
			method:'get',
			url:'work.json'
		}).success(function(data){
			console.log(data)
			$scope.arr=data
		})
})
.controller('details',function($scope,$http,$stateParams,$ionicLoading,$timeout,$ionicActionSheet,$ionicPopup){
		$http({
			method:'get',
			url:'work.json'
		}).success(function(data){
			$scope.arr=data[$stateParams.id].detail
			$scope.title=data[$stateParams.id].title
			console.log($scope.arr)
		})
		$scope.tap=function(){
		 	$ionicPopup.confirm({
		    title:'请确认以下信息',
		    template:'你确定提交信息吗？'
		  }).then(function(res){
		    if (res) {
		      alert('提交成功')
		    }else{
		      alert('提交失败')
		    };
		  })
		}
		console.log($stateParams.id)
})

.controller('ctrl',function($scope,$http){
		$http({
			method:'get',
			url:'aside.json'
		}).success(function(data){
			console.log(data)
			$scope.string=data
		})
})
.controller('details1',function($scope,$http,$stateParams){
		$http({
			method:'get',
			url:'aside.json'
		}).success(function(data){
			$scope.a=data[$stateParams.id].detail
			$scope.b=data[$stateParams.id].title
			
		})
		
})

.controller('a', function($scope, $ionicLoading,$timeout) {
	$scope.t=true;
	$scope.r=[{"img":'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKLoyA6blyxRsib4samnCD5tKmGnLVjNlw8ibUo1RzEwTt3zvpybONnlm1YOiae0oBgrH7GkeaNIPRvA/0',"name":'郭老师',"data":'2017-02-04',"con":'...'},{"img":'http://wx.qlogo.cn/mmopen/vi_32/zjNWKEHdqzqZPRU39Ou3Hnq8odibPJ5a8QGyrW5rVUsYjW0yMXPnov70TGKNibGQqLdjTWrU8QMNR955H4piaqEgA/0',"name":'一湖清水',"data":'2017-04-04',"con":'你好'},{"img":'http://img.weiye.me/zcimgdir/thumb/o_1484490229587b85f5523f2.jpg',"name":'本尊',"data":'2017-01-04',"con":'大家好'},{"img":'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKLoyA6blyxRsib4samnCD5tKmGnLVjNlw8ibUo1RzEwTt3zvpybONnlm1YOiae0oBgrH7GkeaNIPRvA/0',"name":'郭老师',"data":'2017-05-04',"con":'好久不见呀'}]
	$scope.doRefresh=function(){
			$timeout(function(){
				if($scope.t){
				$scope.r=[{"img":'http://wx.qlogo.cn/mmopen/vi_32/zjNWKEHdqzqZPRU39Ou3Hnq8odibPJ5a8QGyrW5rVUsYjW0yMXPnov70TGKNibGQqLdjTWrU8QMNR955H4piaqEgA/0',"name":'一湖清水',"data":'2017-04-04',"con":'这里挺好的哈'},{"img":'http://img.weiye.me/zcimgdir/thumb/o_1484490229587b85f5523f2.jpg',"name":'本尊',"data":'2017-04-04',"con":'今天天气很好呀'},{"img":'http://img.weiye.me/zcimgdir/thumb/o_1484490229587b85f5523f2.jpg',"name":'本尊',"data":'2017-01-04',"con":'新的一天新的开始，加油'},{"img":'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKLoyA6blyxRsib4samnCD5tKmGnLVjNlw8ibUo1RzEwTt3zvpybONnlm1YOiae0oBgrH7GkeaNIPRvA/0',"name":'郭老师',"data":'2017-05-04',"con":'你好吗？'}]
				$scope.t=false;
				}else{
					$scope.r=[{"img":'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKLoyA6blyxRsib4samnCD5tKmGnLVjNlw8ibUo1RzEwTt3zvpybONnlm1YOiae0oBgrH7GkeaNIPRvA/0',"name":'郭老师',"data":'2017-02-04',"con":'...'},{"img":'http://wx.qlogo.cn/mmopen/vi_32/zjNWKEHdqzqZPRU39Ou3Hnq8odibPJ5a8QGyrW5rVUsYjW0yMXPnov70TGKNibGQqLdjTWrU8QMNR955H4piaqEgA/0',"name":'一湖清水',"data":'2017-04-04',"con":'你好'},{"img":'http://img.weiye.me/zcimgdir/thumb/o_1484490229587b85f5523f2.jpg',"name":'本尊',"data":'2017-01-04',"con":'大家好'},{"img":'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKLoyA6blyxRsib4samnCD5tKmGnLVjNlw8ibUo1RzEwTt3zvpybONnlm1YOiae0oBgrH7GkeaNIPRvA/0',"name":'郭老师',"data":'2017-05-04',"con":'好久不见呀'}]
				}
				$scope.$broadcast('scroll.refreshComplete');
			},2000)	
		}
});
