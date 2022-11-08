import { UntypedFormControl } from '@angular/forms';

import { equal } from './validator';

describe('Equal', () => {
  const error = { equal: true };

  it('"aaa" and "aaa" should be equal', () => {
    const control = new UntypedFormControl('aaa');
    expect(equal('aaa')(control)).toBeNull();
  });

  it('"aaa" and "bbb" should not be equal', () => {
    const control = new UntypedFormControl('bbb');
    expect(equal('aaa')(control)).toEqual({ equal: { value: 'aaa' } });
  });
});
