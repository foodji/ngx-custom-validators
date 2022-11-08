import { UntypedFormControl } from '@angular/forms';

import { notMatching } from './validator';

describe('notMatching', () => {
  it('abc should not match /x+/', () => {
    const control = new UntypedFormControl('abc');
    expect(notMatching(/x+/)(control)).toBeNull();
  });

  it('abc should match /a+bc/', () => {
    const control = new UntypedFormControl('abc');
    expect(notMatching(/a+bc/)(control)).toEqual({ notMatching: { value: 'abc', reason: /a+bc/ } });
  });
});
