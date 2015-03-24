myApp.directive('tag',function(){

  return {
    restrict: "E",
    templateUrl: "tags.html"
  }

});

myApp.controller("tagCtrl",["$scope", "$http",function($scope,$http){
  $http.get('data.json').success(function(data){
    $scope.tagData = data;

    $scope.data_store = [];
    for(info in data){
      $scope.data_store.push(data[info].name);
    }


    //  |--------------------------------------------------------
    //  |----------------------
    $scope.$watch('check_tags',function(newVal,oldVal){

      if($scope.data_store.indexOf(newVal) > -1){
        (function($){
          var item = $("<span class='myLabel'></span>").html(newVal);
          $("#taglist").append(item);
        }(jQuery));
      }
      else{
        if($scope.data_store.indexOf(oldVal) > -1){
          (function($){
            $("#taglist").children().last().hide();
          }(jQuery));
        }
      }
    });
  });
}]);
