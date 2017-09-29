export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required Field',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidPhoneNumber': 'Not valid phone number',
            'invalidSSN': 'Not a valid SSN',
            'invalidZip': 'Not a valid zip code',
            'invalidPercent': 'Not a valid percentage'
        };

        return config[validatorName];
    }


    static phoneValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[-. ]?\d{3}[-. ]?\d{4}$/)) {
            return null;
        } else {
            return { 'invalidPhoneNumber': true };
        }
    }

    static percentValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[1-9][0-9]?$|^100$/)) {
            return null;
        } else {
            return { 'invalidPercent': true };
        }
    }

    static ssnValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[-. ]?\d{2}[-. ]?\d{4}$/)) {
            return null;
        } else {
            return { 'invalidSSN': true };
        }
    }

    static stateValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[-. ]?\d{2}[-. ]?\d{4}$/)) {
            return null;
        } else {
            return { 'invalidSSN': true };
        }
    }

    static zipValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^\d{5}$/)) {
            return null;
        } else {
            return { 'invalidZip': true };
        }
    }
}
