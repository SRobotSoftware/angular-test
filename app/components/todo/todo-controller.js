app.controller('TodoController', function () {
    var vm = this;
    vm.list = [];
    vm.addEvent = function () {
        vm.list.push(vm.myEvent);
        vm.myEvent = '';
    }
    vm.removeEvent = function(item) {
        vm.list.splice(item,1);
    }
});