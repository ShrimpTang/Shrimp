var angular = require('angular');
var MODULE_NAME = 'app.post';
angular.module(MODULE_NAME, [])
    .config(function ($stateProvider) {
        $stateProvider.state('post', {
            url: '/post',
            template: require('./post.html'),
            controller: function (postModal) {
                var vm = this;
                postModal.getPost({})
                    .then(function (data) {
                        vm.tags = _.countBy(_.map(data, d=>d.tags).join(' ').split(' '), t=>t);
                    })
            },
            controllerAs:'postCtrl'
        })
    });
module.exports = MODULE_NAME;