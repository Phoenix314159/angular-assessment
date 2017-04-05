angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService) {

    shopService.getProductById().then( response => {
        $scope.product = response.data;
    })
})
