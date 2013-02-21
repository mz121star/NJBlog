/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 22.11.12
 * Time: 22:08
 */

define([], function () {

    var $compileProvider;

    function setCompileProvider(value) {
        $compileProvider = value;
    }

    function register(directive) {
        if (!$compileProvider) {
            throw new Error("$compileProvider is not set!");
        }
        $compileProvider.directive.apply(null, directive);
    }

    return {
        setCompileProvider:setCompileProvider,
        register:register
    }
})
