export class CompareFieldsValidation {
  constructor(fieldName, fieldValue, fieldToCompare) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.fieldToCompare = fieldToCompare;
  }

  validate() {
    if (this.fieldValue !== this.fieldToCompare) {
      return new Error(
        `The field "${this.fieldName}" must be equal to "${this.fieldToCompare}".`
      );
    }
  }
}
