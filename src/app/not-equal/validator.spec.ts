import { UntypedFormControl } from '@angular/forms';

import { notEqual } from './validator';

describe('NotEqual', () => {

  it('"aaa" and "bbb" should be notEqual', () => {
    const control = new UntypedFormControl('bbb');
    expect(notEqual('aaa')(control)).toBeNull();
  });

  it('"aaa" and "aaa" should not be notEqual', () => {
    const control = new UntypedFormControl('aaa');
    expect(notEqual('aaa')(control)).toEqual({ notEqual: { value: 'aaa' } });
  });
});
