import { UntypedFormControl } from '@angular/forms';

import { property } from './validator';

describe('Property validator', () => {
  it('Input is object and has identifier', () => {
    const control = new UntypedFormControl({id: 1});
    expect(property('id')(control)).toBeNull();
  });

  it('Input is object and has name', () => {
    const control = new UntypedFormControl({name: 'name'});
    expect(property('name')(control)).toBeNull();
  });

  it('Input is object and has no identifier', () => {
    const control = new UntypedFormControl({dumb: 1});
    expect(property('id')(control)).toEqual({ hasProperty: { value: 'id' } });
  });

  it('Input is string', () => {
    const control = new UntypedFormControl('dumb string');
    expect(property('id')(control)).toEqual({ hasProperty: { value: 'id' } });
  });

  it('Input is object and has identifier', () => {
    const control = new UntypedFormControl({id: 1, value: 1});
    expect(property('id,value')(control)).toBeNull();
  });

  it('Input is object and has no two properties', () => {
    const control = new UntypedFormControl({value: 1});
    expect(property('id,value')(control)).toEqual({ hasProperty: { value: 'id,value' } });
  });
});
