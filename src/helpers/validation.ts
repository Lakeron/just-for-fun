export function printValidationErrors(errors) {
    return errors.map((error) => {
        console.log('error', error);
        return {
            attribute: error.property,
            error: error.constraints
        }
    });
}