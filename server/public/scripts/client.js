var myApp = angular.module( 'myApp', [] );
myApp.controller( 'cr', function( $http, Random, Rank){
  console.log( 'NG' );


  var vm = this;
  vm.rankSuper = Random.random();
  vm.rankBat = Random.random();
  vm.rankAqua = Random.random();
  vm.Super = Rank.rank();
  vm.Bat = Rank.rank();
  vm.Aqua = Rank.rank();


vm.randomSuper = function(){
  console.log('bens a towel');
  vm.super = Rank.rank();
}
vm.randomBat = function(){
  console.log('bens a towel');
  vm.bat = Rank.rank();
}
vm.randomAqua = function(){
  console.log('bens a towel');
  vm.aqua = Rank.rank();
}

if()






});
