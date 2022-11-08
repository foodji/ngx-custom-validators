import { UntypedFormControl, ValidatorFn } from '@angular/forms';

import { range } from './validator';

describe('Range [4, 9]', () => {
  let control: UntypedFormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = range([4, 9]);
  });

  it('"3" should equal to "{range: true, reason: [4, 9]}"', () => {
    control = new UntypedFormControl(3);
    expect(validator(control)).toEqual({range: {value: [4, 9]}});
  });

  it('"4" should equal to "null"', () => {
    control = new UntypedFormControl(4);
    expect(validator(control)).toBeNull();
  });

  it('"9" should equal to "null"', () => {
    control = new UntypedFormControl(9);
    expect(validator(control)).toBeNull();
  });

  it('"10" should equal to "{range: true, reason: [4, 9]}"', () => {
    control = new UntypedFormControl(10);
    expect(validator(control)).toEqual({range: {value: [4, 9]}});
  });
});
