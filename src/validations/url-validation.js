export class UrlValidation {
  constructor(fieldName, fieldValue) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
  }

  validate() {
    const verifyUrlRegex =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

    if (!verifyUrlRegex.test(this.fieldValue)) {
      return new Error(`The field "${this.fieldName}" must be a valid URL.`);
    }
  }
}
