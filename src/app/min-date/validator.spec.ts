import { UntypedFormControl } from '@angular/forms';
import * as moment from 'moment';
import { minDate } from './validator';


describe('MinDate', () => {
  let control: UntypedFormControl;

  it('"" should equal to "null"', () => {
    control = new UntypedFormControl('');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('"2016-09-08" should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    control = new UntypedFormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({minDate: {value: '2016-09-09', control: undefined}});
  });

  it('"2016-09-10" should equal to "null"', () => {
    control = new UntypedFormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('Date("2016-09-08)" should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    control = new UntypedFormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({minDate: {value: '2016-09-09', control: undefined}});
  });

  it('"Date(2016-09-10)" should equal to "null"', () => {
    control = new UntypedFormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('"Date(2016-09-10)" moment should equal to "null"', () => {
    control = new UntypedFormControl('2016-09-10');
    expect(minDate(moment('2016-09-09'))(control)).toBeNull();
  });

  it('() => Date("2016-09-08)" should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    control = new UntypedFormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({minDate: {value: '2016-09-09', control: undefined}});
  });

  it('"() => Date(2016-09-10)" should equal to "null"', () => {
    control = new UntypedFormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('Date object { year: 2017, month: 10, day: 11} should equal to "null"', () => {
    const obj = { year: 2017, month: 10, day: 11 };
    control = new UntypedFormControl('2017-11-01');
    expect(minDate(obj)(control)).toBeNull();
  });

  it('Date control object { year: 2017, month: 10, day: 11} should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const obj = new UntypedFormControl('2018-10-01');
    control = new UntypedFormControl({year: 2017, month: 10, day: 11});
    expect(minDate(obj)(control)).toEqual({minDate: {value: obj.value, control: obj}});
  });

  it('Date control object { year: 2017, month: 10, day: 11} should equal to "null"', () => {
    const obj = { year: 2016, month: 10, day: 11 };
    control = new UntypedFormControl({year: 2017, month: 10, day: 11});
    expect(minDate(obj)(control)).toBeNull();
  });

  it('Date object { year: 2017, month: 11, day: 11} should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const obj = { year: 2017, month: 11, day: 11 };
    control = new UntypedFormControl('2017-10-01');
    expect(minDate(obj)(control)).toEqual({minDate: {value: obj, control: undefined}});
  });

  it('Date object { year: 2017, month: 11, day: 11} moment should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const obj = { year: 2017, month: 11, day: 11 };
    control = new UntypedFormControl(moment('2017-10-01'));
    expect(minDate(obj)(control)).toEqual({minDate: {value: obj, control: undefined}});
  });

  it('Date form control should equal to "null"', () => {
    const control2 = new UntypedFormControl('2017-01-01');
    control = new UntypedFormControl('2018-11-01');
    expect(minDate(control2)(control)).toBeNull();
  });

  it('Date form control should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const control2 = new UntypedFormControl('2018-01-01');
    control = new UntypedFormControl('2017-11-01');
    expect(minDate(control2)(control)).toEqual({minDate: {value: control2.value, control: control2}});
  });
});

