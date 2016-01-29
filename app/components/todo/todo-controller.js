app.controller('TodoController', function () {
    var vm = this;
    vm.apple = "I love Apples";
    vm.favoriteFoods = [];
    vm.addFood = function () {
        vm.favoriteFoods.push(vm.apple);
    }
});