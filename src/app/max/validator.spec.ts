import { UntypedFormControl } from '@angular/forms';

import { max } from './validator';

describe('Max', () => {
  it('1 should be under 5', () => {
    const control = new UntypedFormControl(1);
    expect(max(5)(control)).toBeNull();
  });

  it('9 should not be over 5', () => {
    const control = new UntypedFormControl(9);
    expect(max(5)(control)).toEqual({ max: { value: 5 } });
  });

  it('"19" should not be over 5', () => {
    const control = new UntypedFormControl('19');
    expect(max(5)(control)).toEqual({ max: { value: 5 } });
  });
});
