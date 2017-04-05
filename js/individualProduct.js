angular.module('assessment').directive('individualProduct', shopService => {
    return {
        restrict: 'E',
        templateUrl: './views/product-tmpl.html',
        link: (scope, elem, attrs) => {
            shopService.getData().then(result => {
                scope.getData = result.data;
            });
        }
    }
})