export class PlateValidation {
  constructor(fieldName, fieldValue, plateRegex) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.plateRegex = plateRegex;
  }

  validate() {
    const defaultRegex = "/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/";
    const regexToPlate = this.plateRegex || defaultRegex;

    if (!regexToPlate.test(this.fieldValue)) {
      return new Error(`The field "${this.fieldName}" must be a valid plate.`);
    }
  }
}
