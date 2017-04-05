angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

    shopService.getData().then(response => {
        console.log(response.data);
        $scope.products = response.data;
    })
})
