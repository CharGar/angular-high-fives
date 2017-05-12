var myApp = angular.module( 'myApp', [] );
myApp.controller( 'cr', function( $http, Random ){
  console.log( 'NG' );


  var vm = this;
  vm.rankSuper = Random.random();
  vm.rankBat = Random.random();
  vm.rankAqua = Random.random();


vm.randomSuper = function(){
  console.log('bens a towel');
  vm.rankSuper = Random.random();
}
vm.randomBat = function(){
  console.log('bens a towel');
}
vm.randomAqua = function(){
  console.log('bens a towel');
}

});
