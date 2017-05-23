console.log('js is connected');

angular
  .module("mainApp", [])
  .controller("mainCTRL", mainCTRL);

function mainCTRL ($scope){

  $scope.greeting = ['hi', 'hello', 'how are u'];

  $scope.info = {
    names: ["Ara", 'Bob', 'Carl', 'Dexter'],
    framework: ['AngularJS', 'React'],
    emotion: ['Love'],
    coins: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple'],
    metals: ['Gold', 'Silver']
  };

  $scope.slider = {
    minValue: 10,
    maxValue: 90,
    options: {
      floor: 0,
      ceil: 100,
      step: 10,
      showTicks: true
    }
  };

}//mainCTRL
