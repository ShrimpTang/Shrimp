module.exports = function (m) {
    m.service('postModal', function ($http, $q, appConfig) {
        this.getPost = function (param = {}) {
            var deferred = $q.defer();
            var defaultParam = {page: 1, limit: 10, tags: ''};
            Object.assign(defaultParam, param);
            $http.get(appConfig.baseUrl + appConfig.post, {
                data: defaultParam
            }).then(function (data) {
                deferred.resolve(data.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    });
}