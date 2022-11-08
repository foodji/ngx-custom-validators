import { UntypedFormControl } from '@angular/forms';

import { base64 } from './validator';

describe('Base64', () => {
  const error = {base64: true};

  it('"ZGFua29nYWk=" should be base64', () => {
    const control = new UntypedFormControl('ZGFua29nYWk=');
    expect(base64(control)).toBeNull();
  });

  it('"ZGFua" should not be base64', () => {
    const control = new UntypedFormControl('ZGFua');
    expect(base64(control)).toEqual(error);
  });
});
