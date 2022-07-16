export class BeOneOfValidation {
  constructor(fieldName, fieldValue, values) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.values = values;
  }

  validate() {
    if (!this.values.includes(this.fieldValue)) {
      return new Error(
        `The field "${this.fieldName}" must be one of [${this.values}].`
      );
    }
  }
}
