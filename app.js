console.log('js is connected');

angular
  .module("mainApp", [])
  .controller("mainCTRL", mainCTRL);

function mainCTRL ($scope){
  $scope.greeting = ['hi', 'hello', 'how are u'];

  $scope.info = {
    name: ["Ara", 'bob'],
    framework: ['AngularJS', 'React'],
    emotion: ['Love']
  };
}
