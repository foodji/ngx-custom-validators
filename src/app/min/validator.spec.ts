import { UntypedFormControl } from '@angular/forms';

import { min } from './validator';

describe('Min', () => {
  it('6 should be over 5', () => {
    const control = new UntypedFormControl(6);

    expect(min(5)(control)).toBeNull();
  });

  it('9 should not be over 10', () => {
    const control = new UntypedFormControl(9);

    expect(min(10)(control)).toEqual({ min: { value: 10 } });
  });
});
