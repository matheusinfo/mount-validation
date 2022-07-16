export class ValidatorComposite {
  constructor(validators) {
    this.validators = validators;
  }

  static build(validators) {
    return new ValidatorComposite(validators)._validate();
  }

  _validate() {
    for (const validation of this.validators) {
      const error = validation.validate();

      if (error) {
        return error;
      }
    }
  }
}
