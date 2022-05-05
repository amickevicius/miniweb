import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static notBlank(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    return value === null || value === undefined || (typeof value === 'string' && !value.trim()) ? { required: true } : null;
  }
}
