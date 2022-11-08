import { UntypedFormControl } from '@angular/forms';

import { gt } from './validator';

describe('GT', () => {

  it('5 should be gt 3', () => {
    const control = new UntypedFormControl(5);

    expect(gt(3)(control)).toBeNull();
  });

  it('3 should not be gt 5', () => {
    const control = new UntypedFormControl(3);

    expect(gt(5)(control)).toEqual({ gt: { value: 5 } });
  });
});
