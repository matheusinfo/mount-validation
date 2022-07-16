# **Validation Builder**

Simple npm package with some validations, without any external dependency (v1.0.0).

Example:
```js
  import { ValidatorBuilder, ValidatorComposite } from "validation-builder";

  // Return the first error
  const error = ValidatorComposite.build([
    ...ValidatorBuilder.field('email', 'example-mail@mail.com').email().build(),
    ...ValidatorBuilder.field('name', 'example-name').minLength(3).build(),
    ...ValidatorBuilder.field('profile-url', 'https://url-example').url(3).build(),
    ...ValidatorBuilder.field('password', 'P@sSW0rD').minLength(8).maxLength(25).strongPassword().build(),
  ])

  if(error){
    ...
  }
```

Validations implemetaded:
```txt
=> BeOneOfValidation

=> CompareFieldsValidation

=> EmailValidation

=> ExactLengthValidation

=> MaxLengthValidation

=> MinLengthValidation

=> PlateValidation

=> RequiredFieldValidation

=> StrongPasswordValidation

=> UrlValidation
```

package on npm (https://www.npmjs.com/package/validation-builder) by @matheusinfo