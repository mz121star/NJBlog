/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 22.11.12
 * Time: 22:38
 */

define(['utils/lazy-directives'], function (lazyDirectives) {

    var $controllerProvider,
        $compileProvider;

    function setControllerProvider(value) {
        $controllerProvider = value;
    }

    function setCompileProvider(value) {
        $compileProvider = value;
        lazyDirectives.setCompileProvider(value);
    }

    function config(templateUrl, controllerName, directives) {
        if (!$controllerProvider) {
            throw new Error("$controllerProvider is not set!");
        }

        var defer,
            html,
            routeDefinition = {};

        routeDefinition.template = function () {
            return html;
        };
        routeDefinition.controller = controllerName;
        routeDefinition.resolve = {
            delay:function ($q, $rootScope) {
                defer = $q.defer();
                if (!html) {
                    var dependencies = [controllerName, "text!" + templateUrl];
                    if (directives) {
                        dependencies = dependencies.concat(directives);
                    }
                    require(dependencies, function () {
                        var controller = arguments[0],
                            template = arguments[1];

                        for (var i = 2; i < arguments.length; i++) {
                            lazyDirectives.register(arguments[i]);
                        }

                        $controllerProvider.register(controllerName, controller);
                        html = template;
                        defer.resolve();
                        $rootScope.$apply()
                    })

                } else {
                    defer.resolve();
                }
                return defer.promise;
            }
        }

        return routeDefinition;
    }

    return {
        setControllerProvider:setControllerProvider,
        setCompileProvider:setCompileProvider,
        config:config
    }
})

