import { UntypedFormControl } from '@angular/forms';

import { uuid } from './validator';

describe('Uuid', () => {

  it('"abc" should not be uuid', () => {
    const control = new UntypedFormControl('abc');
    expect(uuid('4')(control)).toEqual({uuid: true});
  });
});
