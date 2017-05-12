myApp.service('Random', function($http){
  this.random = function(){
  return Math.floor((Math.random()*10));
  };
});
