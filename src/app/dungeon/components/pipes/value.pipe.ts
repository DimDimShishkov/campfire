import { Pipe, PipeTransform } from '@angular/core';
import { IAbility } from 'src/interface/page';

@Pipe({
  name: 'value',
})
export class ValuePipe implements PipeTransform {
  transform(items: IAbility[], text: string): any {
    if (!items) return [];
    if (!text) return items;
    return items.find((item) => item.name === text)?.value;
  }
}
