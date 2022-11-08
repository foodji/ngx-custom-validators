import { UntypedFormControl } from '@angular/forms';

import { dateISO } from './validator';

describe('DateISO', () => {
  const error = {dateISO: true};

  it('"2013-11-12" should be dateISO', () => {
    const control = new UntypedFormControl('2013-11-12');
    expect(dateISO(control)).toBeNull();
  });

  it('"2013-13-12" should not be dateISO', () => {
    const control = new UntypedFormControl('2013-13-12');
    expect(dateISO(control)).toEqual(error);
  });
});
