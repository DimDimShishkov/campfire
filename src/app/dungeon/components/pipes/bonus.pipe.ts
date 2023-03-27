import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus',
})
export class BonusPipe implements PipeTransform {
  transform(value: number) {
    switch (value) {
      case undefined:
        return '0';
      case 8:
        return '-1';
      case 9:
        return '-1';
      case 12:
        return '+1';
      case 13:
        return '+1';
      case 14:
        return '+2';
      case 15:
        return '+2';
      default:
        return '0';
    }
  }
}
