import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../app/custom-forms.module';

@Component({
  selector: 'app-dev',
  templateUrl: 'dev.component.html',
  styleUrls: ['dev.component.scss']
})
export class DevComponent implements OnInit {
  public form: UntypedFormGroup;
  public num = 5;
  public arrayLengthTest = ['ok'];
  public dateTest = { year: 2017, month: 10, day: 12 };
  public objProperty = { id: 1 };

  ngOnInit() {
    const password = new UntypedFormControl('', Validators.required);
    const certainPassword = new UntypedFormControl('', CustomValidators.notEqualTo(password));

    this.form = new UntypedFormGroup({
      password,
      certainPassword
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}
