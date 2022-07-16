export class MinLengthValidation {
  constructor(fieldName, fieldValue, minLength) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.minLength = minLength;
  }

  validate() {
    if (this.fieldValue.toString().length < this.minLength) {
      return new Error(
        `The field "${this.fieldName}" must have at least ${this.minLength} characters.`
      );
    }
  }
}
