myApp.service('Rank', function(){
  this.rank = function(){
  return Math.floor((Math.random()*10));
  };
});
