import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCheckingEmpty',
  pure: true,
})
export class CheckingEmptyOrNot implements PipeTransform {
  transform(value: any): any {
    value ? value : (value = 'field empty');
    return value;
  }
}
