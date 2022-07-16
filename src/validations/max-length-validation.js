export class MaxLengthValidation {
  constructor(fieldName, fieldValue, maxLength) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.maxLength = maxLength;
  }

  validate() {
    if (this.fieldValue.toString().length > this.maxLength) {
      return new Error(
        `The field "${this.fieldName}" must have at most ${this.maxLength} characters.`
      );
    }
  }
}
