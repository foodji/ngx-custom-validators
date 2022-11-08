import { UntypedFormControl, ValidatorFn } from '@angular/forms';

import { url } from './validator';

describe('Url', () => {
  let control: UntypedFormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = url;
  });

  it('"http://www.test.com" should equal to "null"', () => {
    control = new UntypedFormControl('http://www.test.com');
    expect(validator(control)).toBeNull();
  });

  it('"https://www.test.com" should equal to "null"', () => {
    control = new UntypedFormControl('https://www.test.com');
    expect(validator(control)).toBeNull();
  });

  it('"23a" should equal to "{url: true}"', () => {
    control = new UntypedFormControl('23a');
    expect(validator(control)).toEqual({url: true});
  });
});
