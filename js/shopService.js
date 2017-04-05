angular.module('assessment').service('shopService', function($http, $stateParams){
    this.getData = () => {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        })
    }
    this.getProductById = () => {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/' + $stateParams.id
        })
    }
})
