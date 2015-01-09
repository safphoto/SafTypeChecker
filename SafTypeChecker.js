var SAF = SAF || {};

SAF.TypeChecker = {};

(function(checker) {
    /**
     * @return {boolean}
     */
    checker.IsArray = function(value) {
        return checker.IsType(value, 'array');
    };

    /**
     * @return {boolean}
     */
    checker.IsBoolean = function(value) {
        return checker.IsType(value, 'boolean');
    };

    /**
     * @return {boolean}
     */
    checker.IsDate = function(value) {
        return checker.IsType(value, 'date');
    };

    /**
     * @return {boolean}
     */
    checker.IsFunction = function(value) {
        return checker.IsType(value, 'function');
    };

    /**
     * @return {boolean}
     */
    checker.IsNull = function(value) {
        return checker.IsType(value, 'null');
    };

    /**
     * @return {boolean}
     */
    checker.IsNumber = function(value) {
        return checker.IsType(value, 'number');
    };

    /**
     * @return {boolean}
     */
    checker.IsObject = function(value) {
        return checker.IsType(value, 'object');
    };

    /**
     * @return {boolean}
     */
    checker.IsRegExp = function(value) {
        return checker.IsType(value, 'regexp');
    };

    /**
     * @return {boolean}
     */
    checker.IsString = function(value) {
        return checker.IsType(value, 'string');
    };

    /**
     * @return {boolean}
     */
    checker.IsUndefined = function(value) {
        return checker.IsType(value, 'undefined');
    };

    /**
     * @return {boolean}
     */
    checker.IsType = function(value, targetTypeString) {
        var typeString = Object.prototype.toString.call(value).slice(8, -1);
        return typeString.toLowerCase() === targetTypeString.toLowerCase();
    };
}(SAF.TypeChecker));