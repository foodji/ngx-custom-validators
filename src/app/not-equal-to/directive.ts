import { Directive, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, UntypedFormControl, Validator, ValidatorFn } from '@angular/forms';

import { notEqualTo } from './validator';

const NOT_EQUAL_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotEqualToValidator),
  multi: true
};

@Directive({
  selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
  providers: [NOT_EQUAL_TO_VALIDATOR]
})
export class NotEqualToValidator implements Validator, OnInit {
  @Input() notEqualTo: UntypedFormControl;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = notEqualTo(this.notEqualTo);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
