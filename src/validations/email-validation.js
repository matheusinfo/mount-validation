export class EmailValidation {
  constructor(fieldName, fieldValue) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
  }

  validate() {
    const verifyEmailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!verifyEmailRegex.test(this.fieldValue)) {
      return new Error(`The field "${this.fieldName}" must be a valid email.`);
    }
  }
}
