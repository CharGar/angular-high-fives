myApp.service('Random', function(){
  this.random = function(){
  return Math.floor((Math.random()*10));
  };
});
