import { UntypedFormControl } from '@angular/forms';

import { includedIn } from './validator';

describe('includedIn', () => {

  it('[1, 2, 3] should include 3', () => {
    const control = new UntypedFormControl(3);
    expect(includedIn([1, 2, 3])(control)).toBeNull();
  });

  it('["a", "b", "c"] should include "a"', () => {
    const control = new UntypedFormControl('a');
    expect(includedIn(['a', 'b', 'c'])(control)).toBeNull();
  });

  it('[1, 2, 3] should not include 5', () => {
    const control = new UntypedFormControl(5);
    expect(includedIn([1, 2, 3])(control)).toEqual({ includedIn: { value: 5, reason: [1, 2, 3] } });
  });
});
