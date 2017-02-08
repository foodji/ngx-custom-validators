import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const LESS_THAN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => LessThanValidator),
  multi: true
};

@Directive({
  selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
  providers: [LESS_THAN_VALIDATOR]
})
export class LessThanValidator implements Validator, OnInit, OnChanges {
  @Input() lt: number;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.lt(this.lt);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      if (key === 'lt') {
        this.validator = CustomValidators.lt(changes[key].currentValue);
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
