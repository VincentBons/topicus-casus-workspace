import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function dateNotInPastValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentDate = new Date();
    const inputDate = new Date(control.value);
    const dateInPast = inputDate < currentDate;
    return dateInPast ? {dateInPast: {value: control.value}} : null;
  };
}
