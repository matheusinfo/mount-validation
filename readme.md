# **Mount Validation**

Simple npm package with some validations, without any external dependency (v1.0.2).

Install:
```shell
  npm i mount-validation
```

Example:
```js
  import { ValidatorBuilder, ValidatorComposite } from "mount-validation";

  // Return the first error (if have one or more errors)
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

Validations implemented:
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

package on npm (https://www.npmjs.com/package/mount-validation) by @matheusinfo