import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EyeColor } from 'src/app/shared/enum/eye-color.enum';
import { CustomValidators } from 'src/app/shared/validators/custom.validators';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  readonly EyeColor = EyeColor;

  @Input() user: User | undefined;
  @Input() updateIsInProgress: boolean | undefined;

  @Output() saveUserDetails = new EventEmitter<User>();

  userForm = this.formBuilder.group({
    firstName: [, [CustomValidators.notBlank, Validators.minLength(3)]],
    lastName: [],
    age: [],
    eyeColor: [],
    address: this.formBuilder.group({
      country: [],
      city: [],
      street: [],
      houseNumber: [],
      flatNumber: [],
      postalCode: []
    })
  })

  editIsInProgress = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe(() => console.log(this.userForm))
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user?.firstChange && changes.user?.currentValue) {
      console.log(changes.user.currentValue)
      this.userForm.patchValue(changes.user.currentValue);
      this.userForm.disable();
    }

    if (this.updateIsInProgress) {
      this.userForm.disable()
    }
    else {
      this.userForm.disable();
      this.editIsInProgress = false;
    };
  }

  get firstNameControl(): AbstractControl {
    return this.userForm.get('firstName') as AbstractControl;
  }

  onEditBtnClick(): void {
    this.editIsInProgress = true;
    this.userForm.enable();
  }

  onCancelBtnClick(): void {
    this.editIsInProgress = false;
    this.userForm.disable();
  }

  onSaveBtnClick(): void {
    this.saveUserDetails.emit({
      ...this.user,
      ...this.userForm.getRawValue()
    })
  }
}
