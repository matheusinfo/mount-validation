export class StrongPasswordValidation {
  constructor(fieldName, fieldValue, passwordRegex) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.passwordRegex = passwordRegex;
  }

  validate() {
    const defaultRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    const regexToStrongPassword = this.passwordRegex || defaultRegex;

    if (!regexToStrongPassword.test(this.fieldValue)) {
      return new Error(
        `The field "${this.fieldName}" must be a strong password.`
      );
    }
  }
}
