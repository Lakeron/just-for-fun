"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printValidationErrors(errors) {
    return errors.map((error) => {
        console.log('error', error);
        return {
            attribute: error.property,
            error: error.constraints
        };
    });
}
exports.printValidationErrors = printValidationErrors;
//# sourceMappingURL=validation.js.map