import * as Validation from "../validations/index.js";

export class ValidatorBuilder {
  constructor(fieldName, fieldValue, validations) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.validations = validations;
  }

  static field(fieldName, fieldValue) {
    return new ValidatorBuilder(fieldName, fieldValue, []);
  }

  required() {
    this.validations.push(
      new Validation.RequiredFieldValidation(this.fieldName, this.fieldValue)
    );
    return this;
  }

  minLength(minLength) {
    this.validations.push(
      new Validation.MinLengthValidation(
        this.fieldName,
        this.fieldValue,
        minLength
      )
    );
    return this;
  }

  maxLength(maxLength) {
    this.validations.push(
      new Validation.MaxLengthValidation(
        this.fieldName,
        this.fieldValue,
        maxLength
      )
    );
    return this;
  }

  exactLength(exactLength) {
    this.validations.push(
      new Validation.ExactLengthValidation(
        this.fieldName,
        this.fieldValue,
        exactLength
      )
    );
    return this;
  }

  beOneOf(values) {
    this.validations.push(
      new Validation.BeOneOfValidation(this.fieldName, this.fieldValue, values)
    );
    return this;
  }

  compareFields(fieldToCompare) {
    this.validations.push(
      new Validation.CompareFieldsValidation(
        this.fieldName,
        this.fieldValue,
        fieldToCompare
      )
    );
    return this;
  }

  email() {
    this.validations.push(
      new Validation.EmailValidation(this.fieldName, this.fieldValue)
    );
    return this;
  }

  plate(plateRegex) {
    this.validations.push(
      new Validation.PlateValidation(
        this.fieldName,
        this.fieldValue,
        plateRegex
      )
    );
    return this;
  }

  strongPassword(passwordRegex) {
    this.validations.push(
      new Validation.StrongPasswordValidation(
        this.fieldName,
        this.fieldValue,
        passwordRegex
      )
    );
    return this;
  }

  url() {
    this.validations.push(
      new Validation.UrlValidation(this.fieldName, this.fieldValue)
    );
    return this;
  }

  build() {
    return this.validations;
  }
}
