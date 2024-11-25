var expect = function (val) {
    return {
        toBe: (val1) => {
            if (val !== val1) {
                throw new Error('Not Equal');
            }
            return true;
        },
        notToBe: (val2) => {
            if (val === val2) {
                throw new Error('Equal');
            }
            return true;
        }
    }
};