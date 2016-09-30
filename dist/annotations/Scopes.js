"use strict";
require('reflect-metadata');
var SequelizeModelService_1 = require("../services/SequelizeModelService");
/**
 * Sets scopes for annotated class
 */
function Scopes(scopes) {
    return function (target) {
        var options = SequelizeModelService_1.SequelizeModelService.getOptions(target);
        options.scopes = scopes;
    };
}
exports.Scopes = Scopes;
//# sourceMappingURL=Scopes.js.map