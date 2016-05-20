var angular = require('angular');
var serviceModule = angular.module('app.service.modal', []);
require('./modal/post-modal')(serviceModule)
module.exports = [
    'app.service.modal'
]