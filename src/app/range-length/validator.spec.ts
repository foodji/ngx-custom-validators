import { UntypedFormControl, ValidatorFn } from '@angular/forms';

import { rangeLength } from './validator';

describe('RangeLength [4,9],', () => {
  let control: UntypedFormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = rangeLength([4, 9]);
  });

  it('"abc" should equal to "{rangeLength: true}"', () => {
    control = new UntypedFormControl('abc');
    expect(validator(control)).toEqual({rangeLength: {value: [4, 9]}});
  });

  it('"abcd" should equal to "null"', () => {
    control = new UntypedFormControl('abcd');
    expect(validator(control)).toBeNull();
  });

  it('"abcdefghi" should equal to "null"', () => {
    control = new UntypedFormControl('abcdefghi');
    expect(validator(control)).toBeNull();
  });

  it('"abcdefghij" should equal to "{rangeLength: true}"', () => {
    control = new UntypedFormControl('abcdefghij');
    expect(validator(control)).toEqual({rangeLength: {value: [4, 9]}});
  });
});
