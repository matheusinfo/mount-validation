export class RequiredFieldValidation {
  constructor(fieldName, fieldValue) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
  }

  validate() {
    if (!this.fieldValue?.toString()) {
      return new Error(`The field "${this.fieldName}" is required.`);
    }
  }
}
