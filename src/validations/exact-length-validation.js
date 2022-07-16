export class ExactLengthValidation {
  constructor(fieldName, fieldValue, length) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.length = length;
  }

  validate() {
    if (this.fieldValue.toString().length !== this.length) {
      return new Error(
        `The field "${this.fieldName}" must have exactly ${this.length} characters.`
      );
    }
  }
}
